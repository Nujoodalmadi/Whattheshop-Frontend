import React, { Component } from "react";

import "./App.css";
import NavBar from "./Components/NavBar";
import Profile from "./Components/Profile";
class App extends Component {
  render() {
    return (
      <div>
        <div className="App" />
        <NavBar />
        <Profile />
      </div>
    );
  }
}

export default App;
