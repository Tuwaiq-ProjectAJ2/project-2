// import {BrowserRouter, Route } from 'react-router-dom';
// import Home from "./components/Home"
// import NavBar from './component/NavBar';
// import Corses from "./component/Corses";
// import Personal from"./component/Personal";
// import About from './components/About';

// function App() {
//   return (
//     // <BrowserRouter>
//     <div className="App">
//       <NavBar />
//       <Route exact path="/" component={Home} />
//       <Route exact path="/Corses" component={Corses} />
//       <Route exact path="/Personal" component={Personal} />
//       <Route exact path="/About" component={About} />

//     //</BrowserRouter>
//   );
// }

// export default App;

import React, { Component } from "react";
import { Route } from "react-router-dom";
import NavBar from "./component/NavBar";
import Home from "./component/Home";
import Corses from "./component/Corses";
import Personal from "./component/Personal";
import About from "./component/About";
import "./App.css";
function App() {
  return (
    <div>
      <Home />
      {/* <Route exact path="/" component={Home} /> */}

      <Route
        exact
        path="/Corses"
        render={() => {
          return <Corses myName="name" arr={[1, 2, 3]} />;
        }}
      />
      <Route
        exact
        path="/Personal"
        render={() => {
          return <Personal myName="name" arr={[1, 2, 3]} />;
        }}
      />
      {/* <Route exact path="/Personal" Component={Personal} /> */}

      <Route
        exact
        path="/About"
        render={() => {
          return <About myName="name" arr={[1, 2, 3]} />;
        }}
      />
      {/* <Route exact path="/About :id" Component={About} /> */}
      <Route
        exact
        path="/NavBar"
        render={() => {
          return <NavBar myName="name" arr={[1, 2, 3]} />;
        }}
      />
      {/* <Route exact path="/NavBar" Component={} /> */}

      {/* <Router/> */}
    </div>
  );
}
export default App;
