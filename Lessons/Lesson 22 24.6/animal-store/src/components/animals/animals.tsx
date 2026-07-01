import "./animal.css";

export function Animals(){


    // Demo (server info); getting the animal list from our backend. (API);
    const animals = [
        {id: 1, name: "Kitten", price: 10},
        {id: 2, name: "Puppies", price: 15},
        {id: 3, name: "Bunnies", price: 12},
        {id: 4, name: "Fish", price: 5}
    ];




// Using the map higher order function, too print out this list taking from the demo server.
// Every List that you display like this you have too Add an PROP named KEY. too the html tags, It has too be unique too every Item we show in this ul.
// For example in this case we use the item.id
    return(
        <div className="Animals">

        <ul>
            {animals.map(item => <li key={item.id}>{item.name}: {item.price}₪</li>)}
        </ul>


        </div>
    )


}