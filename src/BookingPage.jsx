import BookingForm from './BookingForm';

function BookingPage({ availableTimes, dispatch, submitForm }) {
    return (
        <section className="booking-page-container" style={{ padding: '4rem 10%' }}>
            <div className="booking-header">
                <h2>Reserve a Table</h2>
                <p>Please fill out the form below to secure your dining arrangement at Little Lemon.</p>
            </div>

            <BookingForm
                availableTimes={availableTimes}
                dispatch={dispatch}
                submitForm={submitForm}
            />
        </section>
    );
}

export default BookingPage;