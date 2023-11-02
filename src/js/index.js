//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import PropTypes from 'prop-types';

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
const SecondsCounter = (props) =>{
    return (
        <div className="bg-dark text-center m-3 text-light counter">
            <div><i className="far fa-clock"></i></div>
            <div className="five">{props.digitFive % 10}</div>
            <div className="four">{props.digitFour % 10}</div>
            <div className="three">{props.digitThree % 10}</div>
            <div className="two">{props.digitTwo % 10}</div>
            <div className="one">{props.digitOne % 10}</div>
            <div>,</div>
            <div className="decimal">{props.digitDecimal % 10}</div>
        </div>
    )
}
SecondsCounter.PropTypes = {
    digitOne: PropTypes.number,
    digitTwo: PropTypes.number,
    digitThree: PropTypes.number,
    digitFour: PropTypes.number,
    digitFive: PropTypes.number,
    digitDecimal: PropTypes.number,
}

let counter = 0;
setInterval(function(){
    const five = Math.floor(counter/100000);
    const four = Math.floor(counter/10000);
    const three = Math.floor(counter/1000);
    const two = Math.floor(counter/100);
    const one = Math.floor(counter/10);
    const decimal = Math.floor(counter/1);
    counter ++;

    ReactDOM.render(<SecondsCounter digitOne={one} digitTwo={two} digitThree={three} digitFour={four} digitFive={five} digitDecimal={decimal} />, document.querySelector("#app"));
},100)


