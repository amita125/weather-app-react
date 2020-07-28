import React from "react";
import "./App.css";
import { Route, Switch, HashRouter } from "react-router-dom";

import MainPage from "./Components/MainPage";
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <HashRouter basename={process.env.PUBLIC_URL}>
          <Switch>
            <Route path="/" exact component={MainPage} />
          </Switch>
        </HashRouter>
      </div>
    );
  }
}

export default App;
