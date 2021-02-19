//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

function SimpleCounter(props) {
	return (
		<div className="wholeCounter">
			<div className="calendar">
				<i className="far fa-clock" />
			</div>
			<div className="fourth_digit">{props.fourth_digit % 10}</div>
			<div className="third_digit">{props.third_digit % 10}</div>
			<div className="second_digit">{props.second_digit % 10}</div>
			<div className="first_digit">{props.first_digit % 10}</div>
		</div>
	);
}
SimpleCounter.propTypes = {
	fourth_digit: PropTypes.number,
	third_digit: PropTypes.number,
	second_digit: PropTypes.number,
	first_digit: PropTypes.number
};

let counter = 0;
setInterval(() => {
	const fourth_digit = Math.floor(counter / 1000);
	const third_digit = Math.floor(counter / 100);
	const second_digit = Math.floor(counter / 10);
	const first_digit = Math.floor(counter / 1);
	counter++;
	ReactDOM.render(
		<SimpleCounter
			first_digit={first_digit}
			second_digit={second_digit}
			third_digit={third_digit}
			fourth_digit={fourth_digit}
		/>,
		document.querySelector("#app")
	);
}, 1000);
