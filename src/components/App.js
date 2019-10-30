import React from "react";
import { Router, Route, Switch } from "react-router-dom";

import history from "../history";

const App = () => {
  return (
    <Router history={history}>
      <h1>Hello world</h1>
    </Router>
  );
};

export default App;
