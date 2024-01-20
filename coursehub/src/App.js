// App.js
import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CourseListing from "./components/CourseListing";
import CourseDetails from "./components/CourseDetails";
import StudentDashboard from "./components/StudentDashboard";
import store from "./store";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/" exact component={CourseListing} />
          <Route path="/course/:id" component={CourseDetails} />
          <Route path="/dashboard" component={StudentDashboard} />
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
