import { useEffect, useState } from "react";
import "./main.css";

export function Main() {

    // Local State
    const [sec, setSec] = useState<number>(90);

    useEffect(() => {

        const timer = setInterval(() => {

            // The Core Mechanic
            setSec((sec) => {

                if (sec <= 1) {
                    clearInterval(timer);
                    return 0
                }

                return sec - 1
            });

        }, 1000);

        //this is a built in React feater:
        // Once you close this page or route too a different one, this Return activates, and clears the clock, 
        // thus not making the clock work, if you are on a different page.
        return () => clearInterval(timer);

    }, []);

    // Okey now i will try too build a digit based count down, with 01:00 at the start and 00:00 in the end.
    // Local state management section.

    function extractDigits(rawSeconds: number) {

        const minutes = Math.floor(rawSeconds / 60);
        const seconds = rawSeconds % 60;

        const minString = String(minutes).padStart(2, "0");
        const secString = String(seconds).padStart(2, "0");

        return {
            min1: minString[0],
            min2: minString[1],
            sec1: secString[0],
            sec2: secString[1]
        }
    }

    const [rawTime, setRawTime] = useState<number>(90);

    useEffect(() => {

        const time = setInterval(() => {

            setRawTime((rawSec) => {
                if (rawSec <= 1) {
                    clearInterval(time);
                    return 0
                }
                return rawSec - 1
            })


        }, 1000);

        return () => clearInterval(time);

    }, []);


    const { min1, min2, sec1, sec2 } = extractDigits(rawTime);

    const isDetonated = rawTime === 0;

    ;

    return (

        <div className={`Main ${isDetonated ? "detonated" : ""}`}>

            {/* The Explosive Particle System */}
            {isDetonated && (
                <>
                    <div className="explosion-core"></div>
                    {/* Generates 50 sparks that fly out across the entire screen */}
                    {Array.from({ length: 50 }).map((_, i) => (
                        <div
                            key={i}
                            className="spark"
                            style={{
                                "--tx": `${(Math.random() - 0.5) * 3000}px`,
                                "--ty": `${(Math.random() - 0.5) * 3000}px`,
                                "--scale": Math.random() * 2 + 1,
                                "--delay": `${Math.random() * 0.2}s`
                            } as React.CSSProperties}
                        ></div>
                    ))}
                </>
            )}

            <p>{sec}</p>
            <p>{min1}{min2}:{sec1}{sec2}</p>
        </div>



    );
}
