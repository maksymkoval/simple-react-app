import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import LoginPage from "./pages/loginpage";
import SingleTable from "./pages/mainpage";
function App() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={LoginPage} />
          <Route exact path="/main" component={SingleTable} />
        </Switch>
        </Router>
      );
    }

export default App;