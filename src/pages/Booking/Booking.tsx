import './Booking.css';
import Navbar from '../../components/Navbar/Navbar';
import BookingForm from '../../components/BookingForm/BookingForm';

function BookingPage() {
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
        <BookingForm />
      </section>
    </main>
  );
}

export default BookingPage;
