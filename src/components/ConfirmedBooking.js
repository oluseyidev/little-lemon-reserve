import React from 'react';
import { useLocation, Link } from 'react-router-dom';

function ConfirmedBooking() {
  const location = useLocation();
  const bookingDetails = location.state?.bookingDetails;

  return (
    <main className="main-content">
      <section className="confirmed-container" aria-labelledby="confirmed-heading">
        <div className="success-icon-wrapper" aria-hidden="true">
          <svg className="success-svg" viewBox="0 0 24 24">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <h1 id="confirmed-heading" className="confirmed-title">Booking Confirmed!</h1>
        <p className="confirmed-message">
          Thank you for choosing Little Lemon. Your reservation has been successfully placed. We look forward to dining with you!
        </p>

        {bookingDetails ? (
          <div className="confirmed-details-card" aria-label="Reservation Summary">
            <h3>Reservation Summary</h3>
            <ul className="details-list">
              <li>
                <span>Guest Name:</span>
                <span>{bookingDetails.name}</span>
              </li>
              <li>
                <span>Email Address:</span>
                <span>{bookingDetails.email}</span>
              </li>
              <li>
                <span>Date:</span>
                <span>{bookingDetails.date}</span>
              </li>
              <li>
                <span>Time:</span>
                <span>{bookingDetails.time}</span>
              </li>
              <li>
                <span>Number of Guests:</span>
                <span>{bookingDetails.guests}</span>
              </li>
              <li>
                <span>Occasion:</span>
                <span>{bookingDetails.occasion}</span>
              </li>
              <li>
                <span>Seating Area:</span>
                <span>{bookingDetails.seating}</span>
              </li>
            </ul>
          </div>
        ) : (
          <div className="confirmed-details-card" aria-label="Reservation Info">
            <p>A confirmation email containing your dining details has been sent to your inbox.</p>
          </div>
        )}

        <Link to="/" className="return-home-button" aria-label="Return to the homepage">
          Return Home
        </Link>
      </section>
    </main>
  );
}

export default ConfirmedBooking;
