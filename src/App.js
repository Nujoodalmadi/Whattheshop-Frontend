import React, { Component } from "react";
// import NavBar from "./components/Navigation/NavBar";
import Register from "./components/authentication/Register";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="content-wrapper">
        <Register />
      </div>
    );
  }
}

export default App;
