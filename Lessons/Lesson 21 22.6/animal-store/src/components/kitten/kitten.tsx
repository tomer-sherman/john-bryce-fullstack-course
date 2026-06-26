import "./kitten.css";
import kittenPic from "../../assets/pictures/images.jpeg"
// You have too 
export function Kitten() {

    // Conditional rendering, you show some kind of ui, in condition of something, for example 20% discount on weekend.
    function isWeekend(): boolean {
        const now = new Date();
        const day = now.getDay() + 1;
        return day >= 6 ? true : false;
    }

    // This is 1 way too doo conditional, html, but it can clatter you'r code i think. 
    let ui;
    if (isWeekend()) {
        ui = <p>Only now- on weekend - 20% discount!</p>
    }

    return (
        <div className="Kitten">
            <p>Cute kitten</p>
            {/* This is the second, way much better with less clatter, this is conditional rendering, in the left it simplfy return boolean.*/}
            {isWeekend() && <p>Only now- on weekend - 20% discount!</p>}
            <img src={kittenPic} />
        </div>


    );



}

