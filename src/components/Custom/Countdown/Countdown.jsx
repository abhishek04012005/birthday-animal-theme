import React, { useEffect, useState } from "react";
import './Conutdown.css'; // Assuming you have some CSS styles here
import TreeImage from '../../../assests/tree.png'

const currentDate = new Date();
const targetTime = new Date(currentDate.setMonth(currentDate.getMonth() + 1));

 


const Countdown = () => {
    const [timeBetween, setTimeBetween] = useState(targetTime - Date.now());

    useEffect(() => {
        const interval = setInterval(() => {
            setTimeBetween(targetTime - Date.now());
        }, 1000);

        return () => clearInterval(interval); // Cleanup interval on component unmount
    }, []);


    const calculateTimeLeft = () => {
        const seconds = Math.max(Math.floor((timeBetween / 1000) % 60), 0);
        const minutes = Math.max(Math.floor((timeBetween / 1000 / 60) % 60), 0);
        const hours = Math.max(Math.floor((timeBetween / (1000 * 60 * 60)) % 24), 0);
        const days = Math.max(Math.floor(timeBetween / (1000 * 60 * 60 * 24)), 0);

        return { days, hours, minutes, seconds };
    };

    const { days, hours, minutes, seconds } = calculateTimeLeft();

    return (
        <div>
            <p className="counter">

                <div className="countdown">
                    <div className="countdown-timer">
                        <div>
                            <div className="countdown-value"> <h1>{days}</h1></div>
                            <div className="countdown-variable"> <h1>Days</h1> </div>
                        </div>
                        <div className="countdown-tree-image"> <img src={TreeImage} alt="" /></div>
                    </div>

                    <div className="countdown-timer">
                        <div>
                            <div className="countdown-value"> <h1>{hours}</h1></div>
                            <div className="countdown-variable"> <h1>Hours</h1> </div>
                        </div>
                        <div className="countdown-tree-image"> <img src={TreeImage} alt="" /></div>
                    </div>

                    <div className="countdown-timer">
                        <div>
                            <div className="countdown-value"> <h1>{minutes}</h1></div>
                            <div className="countdown-variable"> <h1>Mins</h1> </div>
                        </div>
                        <div className="countdown-tree-image"> <img src={TreeImage} alt="" /></div>
                    </div>

                    <div className="countdown-timer">
                        <div>
                            <div className="countdown-value"> <h1>{seconds}</h1></div>
                            <div className="countdown-variable"> <h1>Secs</h1> </div>
                        </div>
                        <div className="countdown-tree-image"> <img src={TreeImage} alt="" /></div>
                    </div>
                </div>
            </p>
        </div>
    );
};

export default Countdown;
