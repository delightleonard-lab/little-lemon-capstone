import { useState } from 'react';

function BookingForm({ availableTimes, dispatch, submitForm }) {
    const [date, setDate] = useState('');
    const [time, setTime] = useState('17:00');
    const [guests, setGuests] = useState(1);
    const [occasion, setOccasion] = useState('Birthday');

    const handleDateChange = (e) => {
        const selectedDate = e.target.value;
        setDate(selectedDate);
        dispatch({ type: 'UPDATE_TIMES', payload: selectedDate });
    };

    const isFormValid = () => {
        return (
            date !== '' &&
            guests >= 1 &&
            guests <= 10 &&
            time !== ''
        );
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!isFormValid()) return;

        const formData = {
            date,
            time,
            guests,
            occasion
        };

        submitForm(formData);
    };

    return (
        <form
            onSubmit={handleSubmit}
            style={{ display: 'grid', maxWidth: '300px', gap: '20px' }}
            aria-label="Table reservation form"
        >
            {/* Step 3: Explicit label mapping using htmlFor -> input id link */}
            <label htmlFor="res-date">Choose date</label>
            <input
                type="date"
                id="res-date"
                value={date}
                required
                onChange={handleDateChange}
                aria-required="true"
                aria-label="Select booking date"
            />

            <label htmlFor="res-time">Choose time</label>
            <select
                id="res-time"
                value={time}
                required
                onChange={(e) => setTime(e.target.value)}
                aria-label="Select booking time"
            >
                {availableTimes.map((availableTime) => (
                    <option key={availableTime} value={availableTime}>
                        {availableTime}
                    </option>
                ))}
            </select>

            <label htmlFor="guests">Number of guests</label>
            <input
                type="number"
                placeholder="1"
                id="guests"
                value={guests}
                required
                min="1"
                max="10"
                onChange={(e) => setGuests(Number(e.target.value))}
                aria-required="true"
                aria-label="Number of dining guests"
                style={{
                    borderColor: guests < 1 || guests > 10 ? '#FF0000' : 'initial'
                }}
            />
            {(guests < 1 || guests > 10) && (
                <span
                    id="guests-error"
                    role="alert"
                    style={{ color: '#FF0000', fontSize: '0.8rem', marginTop: '-15px' }}
                >
                    Please select between 1 and 10 guests.
                </span>
            )}

            <label htmlFor="occasion">Occasion</label>
            <select
                id="occasion"
                value={occasion}
                required
                onChange={(e) => setOccasion(e.target.value)}
                aria-label="Select occasion"
            >
                <option value="">Select an occasion</option>
                <option value="birthday">Birthday</option>
                <option value="anniversary">Anniversary</option>
                <option value="date-night">Date Night</option>
            </select>
        </form>
    );
}

export default BookingForm;