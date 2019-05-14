import React from "react";
import "../App.css";

function Display(props) {
  const balls = props.balls;
  return (
    <>
      <h3>Display</h3>
      <div> {props.message} </div>
      <div>Balls = {props.balls}</div>
      <div>Strikes = {props.strikes}</div>
    </>
  );
}
export default Display;
