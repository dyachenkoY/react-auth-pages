import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import SignUpForm from "./components/SignUpForm";
import RegistrationForm from "./components/RegistrationForm";

function App() {
  return (
    <div className="app">
      <Header />
      <Switch>
        <Route path="/login" component={SignUpForm} />
        <Route path="/signup" component={RegistrationForm} />
      </Switch>
    </div>
  );
}

export default App;
