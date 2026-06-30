import React, { useReducer } from 'react';
import { useNavigate } from 'react-router-dom';
import BookingForm from '../components/BookingForm';
import { fetchAPI, submitAPI } from '../api';

// Reducer functions exported for testing purposes
export function updateTimes(state, action) {
  switch (action.type) {
    case 'UPDATE_TIMES':
      return fetchAPI(new Date(action.payload + 'T00:00:00'));
    default:
      return state;
  }
}

export function initializeTimes() {
  return fetchAPI(new Date());
}

function BookingPage() {
  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);
  const navigate = useNavigate();

  const submitForm = (formData) => {
    const success = submitAPI(formData);
    if (success) {
      navigate('/confirmed', { state: { bookingDetails: formData } });
    }
  };

  return (
    <main className="main-content">
      <div className="booking-page-container">
        
        {/* Left Column: Information and Policy */}
        <section className="booking-info-sidebar" aria-labelledby="sidebar-heading">
          <div>
            <h2 id="sidebar-heading">Reserve a Table</h2>
            <p className="sidebar-description">
              Experience the fresh and traditional flavors of the Mediterranean at Little Lemon. Fill out the form to request a reservation at our Chicago location.
            </p>
            
            <div className="booking-policy-card">
              <h3>Reservation Policy</h3>
              <p>
                We hold tables for a maximum of 15 minutes past the reservation time. If you need to make changes or cancel, please contact us at least 1 hour in advance.
              </p>
            </div>
          </div>

          <div className="sidebar-contact-info">
            <h4>Need Help?</h4>
            <p>Call us: (312) 555-0199</p>
            <p>Email: bookings@littlelemon.com</p>
          </div>
        </section>

        {/* Right Column: Interactive Form Card */}
        <section className="form-card" aria-labelledby="form-heading">
          <h2 id="form-heading" className="form-card-title">Book Now</h2>
          <BookingForm 
            availableTimes={availableTimes} 
            dispatch={dispatch} 
            submitForm={submitForm} 
          />
        </section>

      </div>
    </main>
  );
}

export default BookingPage;
