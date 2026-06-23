import { useReducer } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Homepage from './Homepage';
import BookingPage from './BookingPage';
import ConfirmedBooking from './ConfirmedBooking';
import { initializeTimes, updateTimes } from './utils/times';

const submitAPI = (formData) => {
    if (typeof window !== 'undefined' && typeof window.submitAPI === 'function') {
        return window.submitAPI(formData);
    }
    return true;
};

function MainContent() {
    const [availableTimes, dispatch] = useReducer(updateTimes, null, initializeTimes);
    const navigate = useNavigate();

    const submitForm = (formData) => {
        const isSuccess = submitAPI(formData);
        if (isSuccess) {
            navigate('/booking-confirmed');
        }
    };

    return (
        <main>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route
                    path="/reservations"
                    element={
                        <BookingPage
                            availableTimes={availableTimes}
                            dispatch={dispatch}
                            submitForm={submitForm}
                        />
                    }
                />
                <Route path="/booking-confirmed" element={<ConfirmedBooking />} />
            </Routes>
        </main>
    );
}

export default MainContent;