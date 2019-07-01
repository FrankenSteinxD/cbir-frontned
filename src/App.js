import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Gallery from "./pages/Gallery";

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Gallery} />
    </Switch>
  </BrowserRouter>
);

export default App;
