import "./App.css";
import React from "react";
import Header from "./components/common/heading/Header";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/home/Home";
import About from "./components/about/About";
const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/about" component={About} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
