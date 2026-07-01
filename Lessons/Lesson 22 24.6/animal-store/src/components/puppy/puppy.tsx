import { useState } from "react";
import "./puppy.css";

// This puppy component, is a functional component.
// it was created, using a new cli that you have too install in a general terminal the code line you install is install --global vite-something(checkItoutLater)
// Then you can use this this cli in your projects, you write in a seperate terminal that doesn't run your server "create fc Name"

// This details will not be shown on the html, since when the page first loads, it loads the empty details once, and when you press the showDetails btn, it will not change, the state of the span details.

// Sate information, state.

// Local State, this is A local info that belongs too only one component.

// Global state, info that is on all the components,
// This info is usually run by special libaries.

// A simple Var that is in a component, is not considered a state OF the component.
// If this vars value is changing react will not load the page again. since its not efficient.
// If you want too update the html of the component, or the ui of the component you have too manage this info, inside local state!. 

//let details = ""; 




export function Puppy() {

    // Local State:
    // This is the first method too manage the state there are much more effective ways.:
    const [details, setDetails] = useState<string>("");
    

    function showDetails(): void {
        // A.Fetching data from backend demo.
        // B.Tells react that in details we have this string
        // C.ReRender the component call the puppy component again
       setDetails("Name: cute pup price: 15");
    }

    return (
        < div className="Puppy" >

            <p>Cute Component</p>

            <button onClick={showDetails}>Details</button>
            <span>{details}</span>


        </div >
    );
}
