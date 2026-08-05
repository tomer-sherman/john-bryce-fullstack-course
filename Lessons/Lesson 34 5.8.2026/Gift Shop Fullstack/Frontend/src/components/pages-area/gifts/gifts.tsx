import { ChangeEvent, useEffect, useState } from "react";
import "./gifts.css";

import { dataService } from "../../../services/data-service";
import { AudienceModel } from "../../../models/audience-model";
import { notify } from "../../../utils/notify";
import { GiftModel } from "../../../models/gift-model";

// Format a number as shekels with 2 decimals, e.g. ₪53.91:
function formatPrice(value: number): string {
    return "₪" + value.toFixed(2);
}

export function Gifts() {

    const [audience, setAudience] = useState<AudienceModel[]>([]);
    const [gifts, setGifts] = useState<GiftModel[]>([]);

    // Null until the user picks an audience for the first time:
    const [selectedAudienceId, setSelectedAudienceId] = useState<number | null>(null);

    useEffect(() => {

        dataService.getAllAudience()
            .then(audience => setAudience(audience))
            .catch(err => notify.error(err.message))


    }, [])


    async function fetchGifts(args: ChangeEvent<HTMLSelectElement>) {

        try {
            const audienceId = +args.target.value;
            setSelectedAudienceId(audienceId);
            const gifts = await dataService.getProductsByAudience(audienceId);
            setGifts(gifts);

        } catch (err: any) {
            notify.error(err.message);
        }
    }


    return (
        <div className="Gifts">

            <header>
                <h2>Browse Gifts</h2>
                <p className="subtitle">Pick an audience and find the perfect present.</p>
            </header>

            <select defaultValue="" onChange={fetchGifts} aria-label="Select audience">
                <option disabled value="">Select audience:</option>
                {audience.map(a => <option key={a.id} value={a.id}>{a.name}</option>)}
            </select>

            {selectedAudienceId === null &&
                <div className="empty-state">
                    <span className="empty-icon" aria-hidden="true">🎁</span>
                    <p>Choose an audience above to browse gifts</p>
                </div>}

            {selectedAudienceId !== null && gifts.length === 0 &&
                <div className="empty-state">
                    <span className="empty-icon" aria-hidden="true">🎁</span>
                    <p>No gifts for this audience yet.</p>
                </div>}

            {selectedAudienceId !== null && gifts.length > 0 &&
                <ul>
                    {gifts.map(g => {

                        // price arrives as a string from the API - convert before math:
                        const price = Number(g.price);
                        const finalPrice = price * (1 - g.discount / 100);

                        return (
                            <li key={g.id}>
                                <h3>{g.name}</h3>
                                <p className="description">{g.description}</p>
                                <div className="price-row">
                                    <span className="final-price">{formatPrice(finalPrice)}</span>
                                    {g.discount > 0 && <>
                                        <span className="original-price">{formatPrice(price)}</span>
                                        <span className="discount-badge">-{g.discount}%</span>
                                    </>}
                                </div>
                            </li>
                        );
                    })}
                </ul>}

        </div>
    );
}
