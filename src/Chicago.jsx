import chefsImage1 from './assets/Mario-and-Adrian-A.jpg';
import chefsImage2 from './assets/Mario-and-Adrian-b.jpg';

function Chicago() {
    return (
        <section className="about-section">
            <div className="about-content">
                <h2>Little Lemon</h2>
                <h3>Chicago</h3>
                <p>
                    Little Lemon was opened in 2015 by brothers Mario and Adrian.
                    Combining traditional Italian upbringing with Mediterranean flavors,
                    the duo created a modern dining staple in the heart of Chicago.
                </p>
            </div>
            <div className="about-images">
                <img src={chefsImage1} alt="Mario and Adrian cooking" className="image-back" />
                <img src={chefsImage2} alt="Chefs prepping food" className="image-front" />
            </div>
        </section>
    );
}

export default Chicago;