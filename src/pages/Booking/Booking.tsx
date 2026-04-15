import { useReducer } from 'react';
import './Booking.css';
import Navbar from '../../components/Navbar/Navbar';
import BookingForm from '../../components/BookingForm/BookingForm';

const ALL_TIMES = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];

function initializeTimes(): string[] {
  return ALL_TIMES;
}

function updateTimes(_state: string[], _action: { date: string }): string[] {
  // TODO: filter available times based on action.date once API is wired up
  return ALL_TIMES;
}

function BookingPage() {
  const [availableTimes, dispatch] = useReducer(updateTimes, undefined, initializeTimes);

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
        <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
      </section>
    </main>
  );
}

export default BookingPage;
