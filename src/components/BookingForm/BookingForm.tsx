import { useState } from 'react';
import './BookingForm.css';

const INITIAL_AVAILABLE_TIMES = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];

function BookingForm() {
  const [availableTimes] = useState<string[]>(INITIAL_AVAILABLE_TIMES);
  const [date, setDate] = useState('');
  const [time, setTime] = useState(INITIAL_AVAILABLE_TIMES[0]);
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('Birthday');

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: wire up to API service
    console.log({ date, time, guests, occasion });
  }

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <div className="booking-form__field">
        <label htmlFor="res-date">Choose date</label>
        <input
          type="date"
          id="res-date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
      </div>

      <div className="booking-form__field">
        <label htmlFor="res-time">Choose time</label>
        <select
          id="res-time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        >
          {availableTimes.map((t) => (
            <option key={t}>{t}</option>
          ))}
        </select>
      </div>

      <div className="booking-form__field">
        <label htmlFor="guests">Number of guests</label>
        <input
          type="number"
          id="guests"
          placeholder="1"
          min={1}
          max={10}
          value={guests}
          onChange={(e) => setGuests(Number(e.target.value))}
          required
        />
      </div>

      <div className="booking-form__field">
        <label htmlFor="occasion">Occasion</label>
        <select
          id="occasion"
          value={occasion}
          onChange={(e) => setOccasion(e.target.value)}
        >
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>
      </div>

      <button type="submit" className="booking-form__submit">
        Make Your Reservation
      </button>
    </form>
  );
}

export default BookingForm;
