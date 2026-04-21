import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi, beforeAll, afterAll } from 'vitest';
import BookingForm from './BookingForm';
import { initializeTimes, updateTimes } from '../../pages/Booking/Booking';

const MOCK_TIMES = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];

beforeAll(() => {
  vi.stubGlobal('fetchAPI', vi.fn().mockReturnValue(MOCK_TIMES));
  vi.stubGlobal('submitAPI', vi.fn().mockReturnValue(true));
});

afterAll(() => {
  vi.unstubAllGlobals();
});

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

  it('can be submitted after filling in required fields', () => {
    render(<BookingForm availableTimes={defaultTimes} dispatch={mockDispatch} />);

    fireEvent.change(screen.getByLabelText('Choose date'), { target: { value: '2026-04-20' } });
    fireEvent.change(screen.getByLabelText('Number of guests'), { target: { value: '4' } });
    fireEvent.submit(screen.getByRole('button', { name: 'Make Your Reservation' }).closest('form')!);

    expect(mockDispatch).toHaveBeenCalledWith({ date: '2026-04-20' });
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
