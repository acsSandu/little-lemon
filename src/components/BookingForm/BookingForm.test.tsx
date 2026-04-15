import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import BookingForm from './BookingForm';
import { initializeTimes, updateTimes } from '../../pages/Booking/Booking';

const mockDispatch = vi.fn();
const defaultTimes = initializeTimes();

// --- Static text tests ---

describe('BookingForm', () => {
  it('renders the "Choose date" label', () => {
    render(<BookingForm availableTimes={defaultTimes} dispatch={mockDispatch} />);
    expect(screen.getByText('Choose date')).toBeInTheDocument();
  });

  it('renders the "Choose time" label', () => {
    render(<BookingForm availableTimes={defaultTimes} dispatch={mockDispatch} />);
    expect(screen.getByText('Choose time')).toBeInTheDocument();
  });

  it('renders the "Make Your Reservation" submit button', () => {
    render(<BookingForm availableTimes={defaultTimes} dispatch={mockDispatch} />);
    expect(screen.getByText('Make Your Reservation')).toBeInTheDocument();
  });
});

// --- Reducer function tests ---

describe('initializeTimes', () => {
  it('returns a non-empty array of available times', () => {
    const times = initializeTimes();
    expect(times.length).toBeGreaterThan(0);
  });

  it('returns the expected default time slots', () => {
    const times = initializeTimes();
    expect(times).toEqual(['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']);
  });
});

describe('updateTimes', () => {
  it('returns the same state it receives', () => {
    const state = initializeTimes();
    const result = updateTimes(state, { date: '2026-04-20' });
    expect(result).toEqual(state);
  });
});
