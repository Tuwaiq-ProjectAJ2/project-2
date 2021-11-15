import React, { Component } from "react";
import { Route } from "react-router-dom";
import NavBar from "./component/NavBar";
import Home from "./component/Home";
import Corses from "./component/Corses";
import Personal from "./component/Personal";
import About from "./component/About";
import Corse from "./component/Corse";
import "./App.css";
function App() {
  return (
    <div id="mainContenr">
      <Home />
      <Route exact path="/Corses" component={Corses} />
      <Route exact path="/Corse/:id" component={Corse} />

      <Route
        exact
        path="/Personal"
        render={() => {
          return <Personal myName="name" arr={[1, 2, 3]} />;
        }}
      />
      <Route
        exact
        path="/About"
        render={() => {
          return <About myName="name" arr={[1, 2, 3]} />;
        }}
      />
      <Route
        exact
        path="/NavBar"
        render={() => {
          return <NavBar myName="name" arr={[1, 2, 3]} />;
        }}
      />
    </div>
  );
}
export default App;
