//import react into the bundle
import React, {useEffect, useState} from "react";
import ReactDOM from "react-dom";


// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
const SecondsCounter = () =>{
    const [ counter, setCounter ] = useState(0);
    const [ isActive, setIsActive ] = useState(false);

    const handlePrincipal = () =>{
        if (isActive){
            setIsActive(false);
        } else {
            setIsActive(true)
        }
    };
    const handleReset = () =>{
        setCounter(0);
        setIsActive(false);
    };

    useEffect(() => {
        if (isActive){
            const interval = setInterval(() => {
                setCounter(counter => counter + 1)
            }, 100)
            return () => clearInterval(interval);
        }
    }, [isActive])

    return (
        <div className="bg-dark text-center m-3 text-light counter">
            <div><i className="far fa-clock"></i></div>
            <div className="five">{Math.floor(counter/100000) % 10}</div>
            <div className="four">{Math.floor(counter/10000) % 10}</div>
            <div className="three">{Math.floor(counter/1000) % 10}</div>
            <div className="two">{Math.floor(counter/100) % 10}</div>
            <div className="one">{Math.floor(counter/10) % 10}</div>
            <div>,</div>
            <div className="decimal">{Math.floor(counter/1) % 10}</div>
            <div class="btn-group-vertical" role="group" aria-label="Vertical button group">
                <button type="button" class="btn btn-outline-success" onClick={handlePrincipal}>{isActive ? 'Pause' : 'Start'}</button>
                <button type="button" class="btn btn-outline-danger" onClick={handleReset}>Reset</button>
            </div>
        </div>
    )
}

ReactDOM.render(<SecondsCounter  />, document.querySelector("#app"))


