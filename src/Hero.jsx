import { useNavigate } from 'react-router-dom';
import heroImage from './assets/restauranfood.jpg'; // Make sure this file exists in assets!

function Hero() {
    const navigate = useNavigate();

    return (
        <header className="hero-section">
            <div className="hero-content">
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>
                    We are a family-owned Mediterranean restaurant, focused on traditional
                    recipes served with a modern twist.
                </p>
                <button
                    className="action-button"
                    onClick={() => navigate('/reservations')}
                    aria-label="Navigate to booking page"
                >
                    Reserve a Table
                </button>
            </div>
            <div className="hero-image-container">
                <img src={heroImage} alt="Little Lemon signature dish" />
            </div>
        </header>
    );
}

export default Hero;