import React from "react";
import DashBoard from "./DashBoard";
import { Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import PrivateRoute from './PrivateRoute';
import Modal from './components/Modal';

const App = () => {
  return (
    <div>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/modal" exact component={Modal} />
        <PrivateRoute path="/dashboard" component={DashBoard} />
      </Switch>
    </div>
  );
};

export default App;
