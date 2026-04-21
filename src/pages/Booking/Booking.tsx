import { useReducer } from 'react';
import { useNavigate } from 'react-router-dom';
import './Booking.css';
import Navbar from '../../components/Navbar/Navbar';
import BookingForm from '../../components/BookingForm/BookingForm';

export function initializeTimes(): string[] {
  return fetchAPI(new Date());
}

export function updateTimes(_state: string[], action: { date: string }): string[] {
  return fetchAPI(new Date(action.date));
}

function BookingPage() {
  const [availableTimes, dispatch] = useReducer(updateTimes, undefined, initializeTimes);
  const navigate = useNavigate();

  function submitForm(formData: { date: string; time: string; guests: number; occasion: string }) {
    if (submitAPI(formData)) {
      navigate('/booking-confirmed');
    }
  }

  return (
    <main className="booking-page">
      <Navbar />
      <section className="booking-page__hero">
        <div className="booking-page__hero-content">
          <h1>Reserve a Table</h1>
          <p>Join us for an unforgettable Mediterranean dining experience.</p>
        </div>
      </section>
      <section className="booking-page__form-section">
        <h2>Book your table</h2>
        <BookingForm availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm} />
      </section>
    </main>
  );
}

export default BookingPage;
