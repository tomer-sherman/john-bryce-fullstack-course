import { useEffect, useState } from "react";
import "./clock.css";

export function Clock() {


    // Managing Local State:
    const [time, setTime] = useState<string>("");

    // this code will run once, once you first render your Component.
    useEffect(() => {
        setInterval(() => {
            const now = new Date();
            const time = now.toLocaleTimeString();
            console.log(time);
            setTime(time); // this shows time a bunch of times.!!!! 

        }, 1000);
    }, []
    );

    // That is why AJAX calls, need too be in useEffect. unless its inside a onClick function for example. or other events.

    let a, b, c;
    useEffect(() => {
        // This code will still run once- when the component is first rendered. andd.... explanation below.
    }, [a, b, c] // This array, is representing all the variables, that if they change for some reason this variables, This useEffect will be activated.
    );
    // Less used





    //Side- Effect:
    // This is a component that goes out of the boundries of the component.
    // For example, a component that changes states of other components.
    // Or alert, that is a cmd that belongs too the window etc....
    // If you want too want too use a component. that has a side effect. you have too use the internal command. useEffect.

    return (
        <div className="Clock">

            <p>{time}</p>

        </div>
    );
}
