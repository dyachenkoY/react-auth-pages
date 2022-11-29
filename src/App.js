import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import SignUpForm from "./components/SignUpForm";
import RegistrationForm from "./components/RegistrationForm";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="app">
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/login" exact component={SignUpForm} />
        <Route path="/signup" exact component={RegistrationForm} />
      </Switch>
    </div>
  );
}

export default App;
