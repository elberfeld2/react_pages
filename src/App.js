import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Router>
          <div>

            <Link to="/">Inicio</Link> 
            <Link to="/about">Acerca</Link> 
            <Link to="/topics">Topicos</Link>

            <Switch>
              <Route path="/about">
                <h3>Acerca</h3>
              </Route>
              <Route path="/topics">
                <h3>Topicos</h3>
              </Route>
              <Route path="/">
                <h3>Inicio</h3>
              </Route>
            </Switch>
          </div>
        </Router>
      </header>
    </div>
  );
}

export default App;
