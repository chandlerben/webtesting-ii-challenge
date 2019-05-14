import React, { Component } from "react";
import "../App.css";

function Dashboard(props) {
  return (
    <>
      <h3>Dashboard</h3>
      <button onClick={props.strikeMade}>Increase Strike</button>
      <button onClick={props.ballMade}>Increase Ball</button>
      <button onClick={props.foul}>Foul</button>
      <button onClick={props.clear}>Clear</button>
    </>
  );
}
export default Dashboard;
