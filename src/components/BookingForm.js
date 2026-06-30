import React, { useState, useEffect } from 'react';

function BookingForm({ availableTimes, dispatch, submitForm }) {
  // Get today's date in YYYY-MM-DD format for input constraints
  const getTodayDateString = () => {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const dd = String(today.getDate()).padStart(2, '0');
    return `${yyyy}-${mm}-${dd}`;
  };

  const todayStr = getTodayDateString();

  // Form Field States
  const [date, setDate] = useState(todayStr);
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState('2');
  const [occasion, setOccasion] = useState('None');
  const [seating, setSeating] = useState('Indoor');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  // Validation States
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);

  // Set initial time when available times load or change
  useEffect(() => {
    if (availableTimes && availableTimes.length > 0) {
      setTime(availableTimes[0]);
    } else {
      setTime('');
    }
  }, [availableTimes]);

  // Run validation whenever inputs change
  useEffect(() => {
    const validateForm = () => {
      const newErrors = {};

      // Date Validation
      if (!date) {
        newErrors.date = 'Date is required';
      } else {
        const selectedDate = new Date(date + 'T00:00:00');
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        if (selectedDate < today) {
          newErrors.date = 'Reservation date cannot be in the past';
        }
      }

      // Time Validation
      if (!time) {
        newErrors.time = 'Please select a reservation time';
      }

      // Guests Validation
      const guestNum = parseInt(guests, 10);
      if (!guests) {
        newErrors.guests = 'Number of guests is required';
      } else if (isNaN(guestNum) || guestNum < 1 || guestNum > 10) {
        newErrors.guests = 'Number of guests must be between 1 and 10';
      }

      // Name Validation
      if (!name.trim()) {
        newErrors.name = 'Contact name is required';
      } else if (name.trim().length < 2) {
        newErrors.name = 'Name must be at least 2 characters long';
      }

      // Email Validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!email.trim()) {
        newErrors.email = 'Email address is required';
      } else if (!emailRegex.test(email)) {
        newErrors.email = 'Please enter a valid email address';
      }

      setErrors(newErrors);

      // Form is valid if there are no error messages and required values are present
      const valid = Object.keys(newErrors).length === 0 && date && time && guests && name && email;
      setIsFormValid(valid);
    };

    validateForm();
  }, [date, time, guests, name, email]);

  const handleBlur = (field) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
  };

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    setDate(selectedDate);
    // Dispatch action to update available times in parent state
    dispatch({ type: 'UPDATE_TIMES', payload: selectedDate });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Touch all fields to show any existing validation errors
    setTouched({
      date: true,
      time: true,
      guests: true,
      name: true,
      email: true
    });

    if (isFormValid) {
      const reservationData = {
        date,
        time,
        guests,
        occasion,
        seating,
        name,
        email
      };
      submitForm(reservationData);
    }
  };

  return (
    <form className="booking-form" onSubmit={handleSubmit} noValidate aria-label="Table Reservation Form">
      
      {/* Contact Name Field */}
      <div className="form-group">
        <label htmlFor="res-name" className="form-label">Contact Name *</label>
        <input
          type="text"
          id="res-name"
          className={`form-input ${touched.name && errors.name ? 'invalid' : ''}`}
          placeholder="First and Last Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          onBlur={() => handleBlur('name')}
          required
          aria-required="true"
          aria-invalid={!!(touched.name && errors.name)}
          aria-describedby={touched.name && errors.name ? 'res-name-error' : undefined}
        />
        {touched.name && errors.name && (
          <span id="res-name-error" className="error-message" role="alert">
            {errors.name}
          </span>
        )}
      </div>

      {/* Contact Email Field */}
      <div className="form-group">
        <label htmlFor="res-email" className="form-label">Email Address *</label>
        <input
          type="email"
          id="res-email"
          className={`form-input ${touched.email && errors.email ? 'invalid' : ''}`}
          placeholder="yourname@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onBlur={() => handleBlur('email')}
          required
          aria-required="true"
          aria-invalid={!!(touched.email && errors.email)}
          aria-describedby={touched.email && errors.email ? 'res-email-error' : undefined}
        />
        {touched.email && errors.email && (
          <span id="res-email-error" className="error-message" role="alert">
            {errors.email}
          </span>
        )}
      </div>

      {/* Choose Date Field */}
      <div className="form-group">
        <label htmlFor="res-date" className="form-label">Choose Date *</label>
        <input
          type="date"
          id="res-date"
          min={todayStr}
          className={`form-input ${touched.date && errors.date ? 'invalid' : ''}`}
          value={date}
          onChange={handleDateChange}
          onBlur={() => handleBlur('date')}
          required
          aria-required="true"
          aria-invalid={!!(touched.date && errors.date)}
          aria-describedby={touched.date && errors.date ? 'res-date-error' : undefined}
        />
        {touched.date && errors.date && (
          <span id="res-date-error" className="error-message" role="alert">
            {errors.date}
          </span>
        )}
      </div>

      {/* Choose Time Field */}
      <div className="form-group">
        <label htmlFor="res-time" className="form-label">Choose Time *</label>
        <select
          id="res-time"
          className={`form-select ${touched.time && errors.time ? 'invalid' : ''}`}
          value={time}
          onChange={(e) => setTime(e.target.value)}
          onBlur={() => handleBlur('time')}
          required
          aria-required="true"
          aria-invalid={!!(touched.time && errors.time)}
          aria-describedby={touched.time && errors.time ? 'res-time-error' : undefined}
        >
          {availableTimes && availableTimes.length > 0 ? (
            availableTimes.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))
          ) : (
            <option value="">No slots available</option>
          )}
        </select>
        {touched.time && errors.time && (
          <span id="res-time-error" className="error-message" role="alert">
            {errors.time}
          </span>
        )}
      </div>

      {/* Number of Guests Field */}
      <div className="form-group">
        <label htmlFor="res-guests" className="form-label">Number of Guests *</label>
        <input
          type="number"
          id="res-guests"
          min="1"
          max="10"
          className={`form-input ${touched.guests && errors.guests ? 'invalid' : ''}`}
          value={guests}
          onChange={(e) => setGuests(e.target.value)}
          onBlur={() => handleBlur('guests')}
          required
          aria-required="true"
          aria-invalid={!!(touched.guests && errors.guests)}
          aria-describedby={touched.guests && errors.guests ? 'res-guests-error' : undefined}
        />
        {touched.guests && errors.guests && (
          <span id="res-guests-error" className="error-message" role="alert">
            {errors.guests}
          </span>
        )}
      </div>

      {/* Occasion Field */}
      <div className="form-group">
        <label htmlFor="res-occasion" className="form-label">Occasion</label>
        <select
          id="res-occasion"
          className="form-select"
          value={occasion}
          onChange={(e) => setOccasion(e.target.value)}
        >
          <option value="None">None</option>
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
          <option value="Engagement">Engagement</option>
        </select>
      </div>

      {/* Seating Preference - Styled custom radios */}
      <div className="form-group">
        <span className="form-label">Seating Preference</span>
        <div className="preferences-grid" role="radiogroup" aria-label="Seating Preference">
          {['Indoor', 'Outdoor', 'Bar'].map((option) => (
            <label
              key={option}
              className={`preference-option ${seating === option ? 'selected' : ''}`}
            >
              <input
                type="radio"
                name="seating"
                value={option}
                checked={seating === option}
                onChange={() => setSeating(option)}
              />
              {option}
            </label>
          ))}
        </div>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        id="submit-booking"
        className="cta-button submit-booking-button"
        disabled={!isFormValid}
        aria-label="Make your reservation"
      >
        Make Your Reservation
      </button>

    </form>
  );
}

export default BookingForm;
