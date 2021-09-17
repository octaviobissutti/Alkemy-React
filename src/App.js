import "./App.css";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from "./components/Login";
import React from "react";
import Home from "./components/Home";

function App() {
  return (
    <BrowserRouter>
    <React.Fragment>
      <Switch>
    <Route exact path="/Home" component={Home} />
    <Route path ="/Login" component={Login} />
    </Switch>
  </React.Fragment>
    </BrowserRouter>
  );
}

export default App;
