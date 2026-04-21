import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi, afterAll } from 'vitest';
import BookingForm from './BookingForm';
import { initializeTimes, updateTimes } from '../../pages/Booking/Booking';

const MOCK_TIMES = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];

// Stub globals at module level so they are available when initializeTimes()
// is called during module evaluation (before any beforeAll hooks run).
const mockFetchAPI = vi.fn().mockReturnValue(MOCK_TIMES);
vi.stubGlobal('fetchAPI', mockFetchAPI);
vi.stubGlobal('submitAPI', vi.fn().mockReturnValue(true));

afterAll(() => {
  vi.unstubAllGlobals();
});

const mockDispatch = vi.fn();
const mockSubmitForm = vi.fn();

// --- BookingForm component tests ---

describe('BookingForm', () => {
  it('renders the "Choose date" label', () => {
    render(<BookingForm availableTimes={MOCK_TIMES} dispatch={mockDispatch} submitForm={mockSubmitForm} />);
    expect(screen.getByText('Choose date')).toBeInTheDocument();
  });

  it('renders the "Choose time" label', () => {
    render(<BookingForm availableTimes={MOCK_TIMES} dispatch={mockDispatch} submitForm={mockSubmitForm} />);
    expect(screen.getByText('Choose time')).toBeInTheDocument();
  });

  it('renders the "Make Your Reservation" submit button', () => {
    render(<BookingForm availableTimes={MOCK_TIMES} dispatch={mockDispatch} submitForm={mockSubmitForm} />);
    expect(screen.getByText('Make Your Reservation')).toBeInTheDocument();
  });

  it('can be submitted after filling in required fields', () => {
    render(<BookingForm availableTimes={MOCK_TIMES} dispatch={mockDispatch} submitForm={mockSubmitForm} />);

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

  it('calls fetchAPI with today\'s date and returns its result', () => {
    mockFetchAPI.mockClear();
    const times = initializeTimes();
    expect(mockFetchAPI).toHaveBeenCalledWith(expect.any(Date));
    expect(times).toEqual(MOCK_TIMES);
  });
});

describe('updateTimes', () => {
  it('calls fetchAPI with the dispatched date and returns its result', () => {
    mockFetchAPI.mockClear();
    const state = initializeTimes();
    const result = updateTimes(state, { date: '2026-04-20' });
    expect(mockFetchAPI).toHaveBeenCalledWith(new Date('2026-04-20'));
    expect(result).toEqual(MOCK_TIMES);
  });
});
