import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router,Route, Switch} from "react-router-dom";
import SignIn from "./pages/SignIn";
import Home from "./pages/Home"
import './App.css'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
      <Route exact path="/"><Home/></Route>
        <Route path="/sign-in"><SignIn/></Route>

      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
