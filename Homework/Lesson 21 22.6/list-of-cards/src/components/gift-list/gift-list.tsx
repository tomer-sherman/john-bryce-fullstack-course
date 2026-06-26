import { GiftCard } from "../gift-card/gift-card";
import type { Card } from "../models/giftCard";
import "./gift-list.css";

export function GiftList() {

    // Data fetching functions.
    //Demo for server info.
    const giftCards: Card[] = [
        { id: 1, name: "AMOS GAMING", price: 10,description:  "Very good "  ,image: "kitten" },
        { id: 2, name: "GAMING AMOS", price: 10,description:  "Very good"  ,image: "kitten" },
        { id: 3, name: "JUST AMOS", price: 10,description:  "Very good"  ,image: "kitten" },
        { id: 4, name: "S2PID AMOS", price: 10,description:  "Very good"  ,image: "kitten" },
        
    ]

    return (
        <div className="GiftList">

           {giftCards.map(item=> <GiftCard key={item.id} card={item}></GiftCard>)}

        </div>
    );
}

//1.First step of creating, a dynamic list, The list contains 2 factors,(THE LIST HOLDER TAG, THE SPECIFIC DYNAMIC LIST ITEM)  taken from a backEnd demo server that have specific properties, is too Create a model file.
//2. Inside the folder Create a type, inside put all the needed properties in Order too , This type Is like a filter section, too prevent junk from entering the front end.
//3. Now after creating the type, you goo too the List Specific Item, in this case the GiftCard that is contained within the list Holder GiftList.
// and you import the type you have created using type Script. too The GiftCard Component.
//4. Then you have too Enter into the argument this specific Type, and create using html how would you like too display every item in the list. and in the html , You use the {}
// Too import the specific props you want too render when the This component is rendered.
// Keep in mind, if you want too Use the technic when you will not want too reapet the item.props over and over.
// You have too place, A third party type in the Card component. that basically holds, The type you have created inside the Models file.

