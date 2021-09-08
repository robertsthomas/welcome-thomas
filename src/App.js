import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";

function App() {
  const [loginType, setLoginType] = useState();

  return (
    <Router>
      <Switch>
        <Route path="/login">
          {loginType === "hr" ? (
            <Redirect
              to={{
                pathname: "/home",
              }}
            />
          ) : (
            <Login setLoginType={setLoginType} />
          )}
        </Route>
        <Route path="/">
          {loginType === "hr" ? (
            <Home />
          ) : (
            <Redirect
              to={{
                pathname: "/login",
              }}
            />
          )}
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
