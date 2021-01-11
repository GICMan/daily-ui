import * as React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./scss/main.scss";
import "@fortawesome/fontawesome-free/css/all.css";

import dailies from "./components/dailyIndex";

import Home from "./components/Home";

function App() {
  return (
    <Router>
      <Switch>
        {dailies.map((daily, index) => (
          <Route key={index} path={daily.path}>
            <h1 className="daily-number">
              <Link to={"/"}>
                <i className="fas fa-arrow-left"></i>
              </Link>
              {daily.number.toLocaleString("en-US", {
                minimumIntegerDigits: 3
              })}
            </h1>
            {daily.component}
          </Route>
        ))}
        <Route path={"/"}>
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}
ReactDOM.render(<App />, document.getElementById("root"));
