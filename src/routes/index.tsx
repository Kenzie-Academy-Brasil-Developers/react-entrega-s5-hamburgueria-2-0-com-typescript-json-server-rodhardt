import { Route, Switch } from "react-router-dom";

import MainPage from "../pages/Main";
import LoginPage from "../pages/Login";

function Routes() {
  return (
    <Switch>
      <Route path="/login">
        <LoginPage />
      </Route>
      <Route exact path="/">
        <MainPage />
      </Route>
    </Switch>
  );
}

export default Routes;
