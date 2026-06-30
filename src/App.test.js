import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

test('renders Little Lemon navigation and header', () => {
  render(
    <MemoryRouter initialEntries={['/']}>
      <App />
    </MemoryRouter>
  );
  const headerLogoText = screen.getAllByText(/LITTLE LEMON/i);
  expect(headerLogoText.length).toBeGreaterThan(0);
});
