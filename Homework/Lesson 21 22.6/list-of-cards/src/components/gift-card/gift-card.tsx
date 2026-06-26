import type { Card } from "../models/giftCard";
import "./gift-card.css";

type CardProps = {
    card: Card
}

export function GiftCard(card: CardProps) {
    return (
        <div className="GiftCard">

            <span>{card.card.name}</span>
            <br />
            <span>{card.card.price}</span>
            <br />
             <span>{card.card.description}</span>
             <br />
             <p>{card.card.image}</p>
        </div>
    );
}
