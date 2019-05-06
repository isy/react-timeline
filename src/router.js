import React from "react";
import { Route, Switch } from "react-router-dom";

import Index from "./pages/Index";
import Post from "./pages/Post";

export default () => (
  <Switch>
    <Route exact path="/" component={Index} />
    <Route exact path="/post" component={Post} />
  </Switch>
);
