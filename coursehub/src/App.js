import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/common/header/Header";
import Home from "./components/home/Home";
import About from "./components/about/About";
import CourseHome from "./components/allcourses/CourseHome";
import Contact from "./components/contact/contact";
import Footer from "./components/common/footer/Footer";
import Team from "./components/team/Team";
const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/courses" component={CourseHome} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/team" component={Team} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
};

export default App;
