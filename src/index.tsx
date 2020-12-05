import * as React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./scss/main.scss";
import "@fortawesome/fontawesome-free/css/all.css";

import dailies from "./components/dailyIndex";

function App() {
  return (
    <Router>
      <Switch>
        {dailies.map((daily, index) => (
          <Route key={index} path={daily.path}>
            <h1 className="daily-number">{daily.number}</h1>
            {daily.component}
          </Route>
        ))}
      </Switch>
    </Router>
  );
}
ReactDOM.render(<App />, document.getElementById("root"));
