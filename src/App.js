import React from "react";
import "./App.css";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

import MainPage from "./Components/MainPage";
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route
              path='/'
              exact
              component={MainPage}
            />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
