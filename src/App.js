import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/home/Home";
import Hunger from "./components/hunger/Hunger";
import Login from "./components/login/Login";
import Verify from "./components/verify/Verify";

function App() {
  return (
    <Router>
      <div className="app">
      <Switch>
        <Route path="/hunger" component={Hunger} />
        <Route path="/login" component={Login} />
        <Route path="/verify" component={Verify} />
        <Route path="/" component={Home} />
      </Switch>
      </div>
    </Router>
  );
}

export default App;
