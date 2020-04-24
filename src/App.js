import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import "./views/components/Button/Button.css";
import ButtonUI from "./views/components/Button/Button";

class App extends React.Component {
  render() {
    return (
      <div>
        <h1> App Js</h1>
        <ButtonUI>Button</ButtonUI>
        <ButtonUI type="outlined">Button</ButtonUI>
        <ButtonUI type="textual">Button</ButtonUI>
      </div>
    );
  }
}

export default App;
