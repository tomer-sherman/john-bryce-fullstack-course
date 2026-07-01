import { useState } from "react";
import "./clicker.css";

export function Clicker() {


    // This is the old school way, it isn't the most efficient.
    // const arr = useState<number>(0);
    // const counter = arr[0];
    // const set Counter = arr[1];

    // Local state manegment.
    const [counter, setCounter] = useState<number>(0); 
   

    function increment():void{
        setCounter(counter+1)
    }

    return (


        <div className="Clicker">

            <button onClick={increment}>Click Me</button>
			<span>Total Clicks:{counter}</span>

        </div>
    );
}
