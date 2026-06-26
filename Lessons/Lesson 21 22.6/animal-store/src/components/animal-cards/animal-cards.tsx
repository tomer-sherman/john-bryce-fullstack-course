import "./animal-cards.css";
import kitten from "../../assets/pictures/kitten1.jpeg";
import puppy from "../../assets/pictures/puppy1.jpeg";
import duck from "../../assets/pictures/duck1.jpg";
import fish from "../../assets/pictures/fish1.jpeg";
import { Card } from "../card/card";
import { Animal } from "../models/animal";




export function AnimalCards() {

    // This way is The 1 1 1 way, this is a hard coded way not ideal
     //An array with all the animals, its a demo info from the server

    const animals: Animal[] = [
        { id: 1, name: "Kitten", price: 10, image: kitten },
        { id: 2, name: "Puppy", price: 15, image: puppy },
        { id: 3, name: "Duck", price: 12, image: duck },
        { id: 4, name: "Fish", price: 5, image: fish }
    ]



    return (
        <div className="AnimalCards">

             {/* {animals.map(pet =>
                <div className="Card" key={pet.id}>
                    <span >{pet.name}</span>
                    <br />
                    <span>Price: {pet.price}</span>
                    <br />
                    <img src={pet.image} />
                </div>)}  */}
        {/*This lower method, is Sending data too activated Card component!! */}
        {/*Every time you write as HTML a component name, You activate it, IN THIS WAY YOU CAN SEND DATA TOO IT */}
        {/*But in order too get DATA you have too put the data that The card is getting as an argument */}

        {animals.map(item => <Card key={item.id} animal={item}></Card>)}                




        </div>
    );
}
