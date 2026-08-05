import { Link } from "react-router-dom";
import "./home.css";

export function Home() {
    return (
        <div className="Home">

            <div className="hero-text">
                <span className="eyebrow">The Little Gift Boutique</span>
                <h1>Find the perfect gift for everyone</h1>
                <p>
                    Browse our shelves of wrapped-up delights and discover
                    something wonderful for every person on your list — no
                    hunting, no stress, just gifts that make people smile.
                </p>
                <div className="cta-row">
                    <Link to="/gifts" className="btn-primary">Browse Gifts</Link>
                    <Link to="/new" className="link-secondary">Add a Gift &rarr;</Link>
                </div>
            </div>

            <img
                src="https://img.magnific.com/premium-vector/christmas-gift-shop-with-wrapped-presents-ornaments-snowy-windows-flat-illustration-vector_93536-2395.jpg?semt=ais_hybrid&w=740&q=80"
                alt="Illustrated gift shop storefront"
            />

        </div>
    );
}
