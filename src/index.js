//Import the React and ReactDOM libraries
import React from "react";
import ReactDOM from "react-dom";

//Create a react component
const App = () => {
  function getTime() {
    return new Date().toLocaleTimeString();
  }
  return (
    <div>
      <p>Current Time:</p>
      <div>{getTime()}</div>
    </div>
  );
};
//Take the react component and show it on the screen
ReactDOM.render(<App />, document.querySelector("#root"));
