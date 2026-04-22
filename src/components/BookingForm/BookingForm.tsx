import { useState } from 'react';
import './BookingForm.css';

interface BookingFormProps {
  availableTimes: string[];
  dispatch: (action: { date: string }) => void;
  submitForm: (formData: { date: string; time: string; guests: number; occasion: string }) => void;
}

interface FormErrors {
  date?: string;
  time?: string;
  guests?: string;
  occasion?: string;
}

type FieldName = keyof FormErrors;

function validate(date: string, time: string, guests: number, occasion: string): FormErrors {
  const errors: FormErrors = {};

  if (!date) {
    errors.date = 'Please choose a date.';
  } else {
    const todayStr = new Date().toISOString().split('T')[0];
    if (date < todayStr) {
      errors.date = 'Date must be today or in the future.';
    }
  }

  if (!time) {
    errors.time = 'Please choose a time.';
  }

  if (!Number.isInteger(guests) || guests < 1 || guests > 10) {
    errors.guests = 'Number of guests must be between 1 and 10.';
  }

  if (!occasion) {
    errors.occasion = 'Please select an occasion.';
  }

  return errors;
}

function BookingForm({ availableTimes, dispatch, submitForm }: BookingFormProps) {
  const [date, setDate] = useState('');
  const [time, setTime] = useState(availableTimes[0] ?? '');
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('Birthday');
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Partial<Record<FieldName, boolean>>>({});

  function handleBlur(field: FieldName) {
    setTouched((prev) => ({ ...prev, [field]: true }));
    setErrors(validate(date, time, guests, occasion));
  }

  function handleSubmit(e: { preventDefault(): void }) {
    e.preventDefault();
    setTouched({ date: true, time: true, guests: true, occasion: true });
    const validationErrors = validate(date, time, guests, occasion);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      submitForm({ date, time, guests, occasion });
    }
  }

  return (
    <form className="booking-form" onSubmit={handleSubmit} noValidate aria-label="Table reservation">
      <div className="booking-form__field">
        <label htmlFor="res-date">Choose date</label>
        <input
          type="date"
          id="res-date"
          value={date}
          aria-invalid={touched.date ? !!errors.date : undefined}
          aria-required="true"
          aria-describedby={touched.date && errors.date ? 'error-date' : undefined}
          onChange={(e) => {
            setDate(e.target.value);
            dispatch({ date: e.target.value });
          }}
          onBlur={() => handleBlur('date')}
        />
        {touched.date && errors.date && (
          <span id="error-date" className="booking-form__error" role="alert">
            {errors.date}
          </span>
        )}
      </div>

      <div className="booking-form__field">
        <label htmlFor="res-time">Choose time</label>
        <select
          id="res-time"
          value={time}
          aria-invalid={touched.time ? !!errors.time : undefined}
          aria-required="true"
          aria-describedby={touched.time && errors.time ? 'error-time' : undefined}
          onChange={(e) => setTime(e.target.value)}
          onBlur={() => handleBlur('time')}
        >
          {availableTimes.map((t) => (
            <option key={t}>{t}</option>
          ))}
        </select>
        {touched.time && errors.time && (
          <span id="error-time" className="booking-form__error" role="alert">
            {errors.time}
          </span>
        )}
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
          aria-invalid={touched.guests ? !!errors.guests : undefined}
          aria-required="true"
          aria-describedby={touched.guests && errors.guests ? 'error-guests' : undefined}
          onChange={(e) => setGuests(Number(e.target.value))}
          onBlur={() => handleBlur('guests')}
        />
        {touched.guests && errors.guests && (
          <span id="error-guests" className="booking-form__error" role="alert">
            {errors.guests}
          </span>
        )}
      </div>

      <div className="booking-form__field">
        <label htmlFor="occasion">Occasion</label>
        <select
          id="occasion"
          value={occasion}
          aria-invalid={touched.occasion ? !!errors.occasion : undefined}
          aria-required="true"
          aria-describedby={touched.occasion && errors.occasion ? 'error-occasion' : undefined}
          onChange={(e) => setOccasion(e.target.value)}
          onBlur={() => handleBlur('occasion')}
        >
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>
        {touched.occasion && errors.occasion && (
          <span id="error-occasion" className="booking-form__error" role="alert">
            {errors.occasion}
          </span>
        )}
      </div>

      <button type="submit" className="booking-form__submit">
        Make Your Reservation
      </button>
    </form>
  );
}

export default BookingForm;
