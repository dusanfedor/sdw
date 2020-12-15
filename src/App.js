import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import FirstPage from "./pages/FirstPage/FirstPage";
import SecondPage from "./pages/SecondPage/SecondPage";

function App() {
  return (
    <Switch>
      <Route exact path="/sdw">
        <Redirect to="/sdw/second" />
      </Route>
      <Route exact path="/sdw/first" component={FirstPage} />
      <Route exact path="/sdw/second" component={SecondPage} />
    </Switch>
  );
}

export default App;
