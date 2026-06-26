import { Header } from "../header/header";
import "./layout.css";
import woman from "../../assets/woman.jpeg";
import bear from "../../assets/bear.jpeg";
import tiger from "../../assets/tiger.jpeg";
import { useState } from "react";
import blank from "../../assets/blank.jpeg";






export function Layout() {
    // The big image array


    type RandomPic = {
        image: string;
        description?: string;
    }


    const imgArr: RandomPic[] = [
        { image: woman, description: "Just a gay ass woman" },
        { image: bear, description: "A bear standing there WANTING TOO EAT YOU!!" },
        { image: tiger, description: "THUG LIFE TIGER!!!" }

    ]

    const [image, setImage] = useState<RandomPic>({ image: blank,  description: ""});


    function randomNum(): number {
        const num = Math.floor(Math.random() * 3);
        return num;
    }

    function changePic(): void {
        setImage(imgArr[randomNum()])
    }

    return (



        <div className="Layout">

            <header>
                <Header />
            </header>

            <main>
                <div>
                    <button onClick={changePic} >CLICK MEEE!!!</button>
                    <br />
                    <img src={image.image}></img>
                    <br />
                    <p>{image.description}</p>
                </div>
            </main>

        </div>
    );
}
