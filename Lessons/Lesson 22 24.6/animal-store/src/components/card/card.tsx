import { Animal } from "../models/animal";
import "./card.css";
// THIS IS THE ARGUMENT TYPE WE ARE PUTTING INSIDE THE ARGUMENT

type CardProps = {
    animal: Animal;
    //         id: number,
    //         name: string,
    //         price: number,
    //         image: string
};
// } THIS CLATTERS YOU CODE !!!

// In order, too not have this ugly code above you USE MODEL,
// ITS a type or class that consists PURE DATA. you create these models, in a seperate folder named Models


export function Card(props: CardProps) {
    return (
        <div className="Card">

            <span>{props.animal.name}</span>
            <br />
            <span>{props.animal.price}</span>
            <br />
            <img src={props.animal.image} />

        </div>
    );
}
