function ConfirmedBooking() {
    return (
        <section style={{ padding: '4rem 10%', textAlign: 'center', background: '#FFF' }}>
            <h2 style={{ fontSize: '2.5rem', color: '#495E57' }}>Reservation Confirmed!</h2>
            <p style={{ fontSize: '1.2rem', color: '#333333', marginTop: '1rem' }}>
                Thank you for choosing Little Lemon. Your table reservation has been successfully secured.
            </p>
            <p style={{ color: '#495E57', fontStyle: 'italic' }}>
                A confirmation email with your booking details has been sent. We look forward to serving you!
            </p>
        </section>
    );
}

export default ConfirmedBooking;