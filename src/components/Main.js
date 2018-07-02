import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import createHistory from "history/createBrowserHistory";
import GameField from "./GameField";

const history = createHistory();

function Main() {
  return (
    <main>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/game" component={GameField} />
      </Switch>
    </main>
  );
}

export default Main;
