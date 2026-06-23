import salad from './assets/greek-salad.jpg';
import bruschetta from './assets/bruchetta.jpg';
import dessert from './assets/lemon-dessert.jpg';

const specialsData = [
    {
        id: 1,
        title: "Greek Salad",
        price: "$12.99",
        image: salad,
        description: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese."
    },
    {
        id: 2,
        title: "Bruchetta",
        price: "$5.99",
        image: bruschetta,
        description: "Our Grilled bread rubbed with garlic and seasoned with salt and olive oil."
    },
    {
        id: 3,
        title: "Lemon Dessert",
        price: "$5.00",
        image: dessert,
        description: "This comes straight from grandma's recipe book, every last ingredient has been sourced."
    }
];

function Specials() {
    return (
        <section className="specials-section">
            <div className="specials-header">
                <h3>This Week's Specials</h3>
                <button className="action-button">Online Menu</button>
            </div>
            <div className="specials-grid">
                {specialsData.map((item) => (
                    <article key={item.id} className="menu-card">
                        <img src={item.image} alt={item.title} />
                        <div className="card-title-row">
                            <h4>{item.title}</h4>
                            <span className="card-price">{item.price}</span>
                        </div>
                        <p>{item.description}</p>
                        <button className="delivery-button">Order a delivery</button>
                    </article>
                ))}
            </div>
        </section>
    );
}

export default Specials;