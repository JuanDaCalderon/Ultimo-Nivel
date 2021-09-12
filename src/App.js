import React from 'react';
import { Switch, Route } from "react-router-dom";
import Home from './components/Home';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home}></Route>
    </Switch >
  );
}

export default App;
