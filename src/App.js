import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import FirstPage from "./pages/FirstPage/FirstPage";
import SecondPage from "./pages/SecondPage/SecondPage";

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <Redirect to="/first" />
      </Route>
      <Route exact path="/">
        <Redirect to="/first" />
      </Route>
      <Route exact path="/first" component={FirstPage} />
      <Route exact path="/second" component={SecondPage} />
    </Switch>
  );
}

export default App;
