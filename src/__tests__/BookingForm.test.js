import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import BookingForm from '../components/BookingForm';
import { initializeTimes, updateTimes } from '../pages/BookingPage';

// 1. Reducer Unit Tests
describe('BookingPage Reducer functions', () => {
  test('initializeTimes should return a non-empty array of available times', () => {
    const times = initializeTimes();
    expect(Array.isArray(times)).toBe(true);
    expect(times.length).toBeGreaterThan(0);
  });

  test('updateTimes should return a new list of available times based on action date', () => {
    const initialState = [];
    const action = { type: 'UPDATE_TIMES', payload: '2026-07-05' };
    const updatedState = updateTimes(initialState, action);
    
    expect(Array.isArray(updatedState)).toBe(true);
    expect(updatedState.length).toBeGreaterThan(0);
  });
});

// 2. Component Unit Tests
describe('BookingForm Component', () => {
  const mockAvailableTimes = ['17:00', '18:00', '19:00'];
  const mockDispatch = jest.fn();
  const mockSubmitForm = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('Renders all fields in the booking form with correct HTML5 validation attributes', () => {
    render(
      <BookingForm 
        availableTimes={mockAvailableTimes} 
        dispatch={mockDispatch} 
        submitForm={mockSubmitForm} 
      />
    );

    // Name input checks
    const nameInput = screen.getByLabelText(/contact name/i);
    expect(nameInput).toBeInTheDocument();
    expect(nameInput).toHaveAttribute('type', 'text');
    expect(nameInput).toBeRequired();

    // Email input checks
    const emailInput = screen.getByLabelText(/email address/i);
    expect(emailInput).toBeInTheDocument();
    expect(emailInput).toHaveAttribute('type', 'email');
    expect(emailInput).toBeRequired();

    // Date input checks
    const dateInput = screen.getByLabelText(/choose date/i);
    expect(dateInput).toBeInTheDocument();
    expect(dateInput).toHaveAttribute('type', 'date');
    expect(dateInput).toBeRequired();

    // Time select checks
    const timeSelect = screen.getByLabelText(/choose time/i);
    expect(timeSelect).toBeInTheDocument();
    expect(timeSelect).toBeRequired();

    // Guests input checks
    const guestsInput = screen.getByLabelText(/number of guests/i);
    expect(guestsInput).toBeInTheDocument();
    expect(guestsInput).toHaveAttribute('type', 'number');
    expect(guestsInput).toHaveAttribute('min', '1');
    expect(guestsInput).toHaveAttribute('max', '10');
    expect(guestsInput).toBeRequired();
  });

  test('Submit button is disabled initially (empty name and email fields)', () => {
    render(
      <BookingForm 
        availableTimes={mockAvailableTimes} 
        dispatch={mockDispatch} 
        submitForm={mockSubmitForm} 
      />
    );

    const submitButton = screen.getByRole('button', { name: /make your reservation/i });
    expect(submitButton).toBeDisabled();
  });

  test('Shows real-time JavaScript validation errors and disables submit when fields are invalid', () => {
    render(
      <BookingForm 
        availableTimes={mockAvailableTimes} 
        dispatch={mockDispatch} 
        submitForm={mockSubmitForm} 
      />
    );

    const nameInput = screen.getByLabelText(/contact name/i);
    const emailInput = screen.getByLabelText(/email address/i);
    const submitButton = screen.getByRole('button', { name: /make your reservation/i });

    // Touch name input and leave it too short
    fireEvent.change(nameInput, { target: { value: 'A' } });
    fireEvent.blur(nameInput);
    expect(screen.getByText(/name must be at least 2 characters long/i)).toBeInTheDocument();

    // Invalid email input
    fireEvent.change(emailInput, { target: { value: 'invalid-email' } });
    fireEvent.blur(emailInput);
    expect(screen.getByText(/please enter a valid email address/i)).toBeInTheDocument();

    expect(submitButton).toBeDisabled();
  });

  test('Enables submit button and calls submitForm when all fields are valid', () => {
    render(
      <BookingForm 
        availableTimes={mockAvailableTimes} 
        dispatch={mockDispatch} 
        submitForm={mockSubmitForm} 
      />
    );

    const nameInput = screen.getByLabelText(/contact name/i);
    const emailInput = screen.getByLabelText(/email address/i);
    const guestsInput = screen.getByLabelText(/number of guests/i);
    const submitButton = screen.getByRole('button', { name: /make your reservation/i });

    // Fill valid info
    fireEvent.change(nameInput, { target: { value: 'Jane Doe' } });
    fireEvent.change(emailInput, { target: { value: 'jane@example.com' } });
    fireEvent.change(guestsInput, { target: { value: '4' } });

    expect(submitButton).not.toBeDisabled();

    // Submit form
    fireEvent.click(submitButton);
    expect(mockSubmitForm).toHaveBeenCalledTimes(1);
    expect(mockSubmitForm).toHaveBeenCalledWith(expect.objectContaining({
      name: 'Jane Doe',
      email: 'jane@example.com',
      guests: '4',
      seating: 'Indoor',
      occasion: 'None'
    }));
  });

  test('Dispatches action when date field changes', () => {
    render(
      <BookingForm 
        availableTimes={mockAvailableTimes} 
        dispatch={mockDispatch} 
        submitForm={mockSubmitForm} 
      />
    );

    const dateInput = screen.getByLabelText(/choose date/i);
    fireEvent.change(dateInput, { target: { value: '2026-07-15' } });

    expect(mockDispatch).toHaveBeenCalledWith({
      type: 'UPDATE_TIMES',
      payload: '2026-07-15'
    });
  });
});
