import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

// import Gallery from "./pages/Gallery";
import Main from "./pages/Main";

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Main} />
      {/* <Route exact path="/" component={Gallery} /> */}
    </Switch>
  </BrowserRouter>
);

export default App;
