function CustomersSay() {
    const reviews = [
        { id: 1, rating: "⭐⭐⭐⭐⭐", name: "Sarah J.", text: "The lemon dessert was absolutely incredible! Authentic Mediterranean flavors.", avatar: "https://i.pravatar.cc/150?img=1" },
        { id: 2, rating: "⭐⭐⭐⭐⭐", name: "Alex M.", text: "Best Greek salad in Chicago. The atmosphere is warm and inviting.", avatar: "https://i.pravatar.cc/150?img=2" },
        { id: 3, rating: "⭐⭐⭐⭐", name: "John D.", text: "Excellent customer service and the table booking system was so smooth.", avatar: "https://i.pravatar.cc/150?img=3" },
        { id: 4, rating: "⭐⭐⭐⭐⭐", name: "Elena R.", text: "A hidden gem! Truly matches up to the standard of fine traditional dining.", avatar: "https://i.pravatar.cc/150?img=4" }
    ];

    return (
        <section className="testimonials-section" style={{ padding: '4rem 10%', background: '#EDEFEE', textAlign: 'center' }}>
            <h2 style={{ fontSize: '2.5rem', color: '#495E57', marginBottom: '2rem' }}>What our customers say!</h2>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginTop: '2rem' }}>
                {reviews.map((review) => (
                    <div key={review.id} style={{ background: '#FFF', padding: '1.5rem', borderRadius: '16px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)', textAlign: 'left' }}>
                        <div style={{ color: '#F4CE14', marginBottom: '0.5rem' }}>{review.rating}</div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '0.5rem' }}>
                            <img src={review.avatar} alt={review.name} style={{ width: '40px', height: '40px', borderRadius: '50%' }} />
                            <h4 style={{ margin: 0, color: '#333333' }}>{review.name}</h4>
                        </div>
                        <p style={{ color: '#495E57', fontSize: '0.95rem', fontStyle: 'italic', margin: 0 }}>"{review.text}"</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default CustomersSay;