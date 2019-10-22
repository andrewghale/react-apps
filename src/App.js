import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './pages/index';
import Counter from './pages/counter';
import Todo from './pages/to-do-list';
import Nav from './components/Nav';
import './styles/main.scss';

const App = () => (
  <Router>
    <Nav />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/counter" component={Counter} />
      <Route path="/to-do-list" component={Todo} />
    </Switch>
  </Router>
)

export default App;
