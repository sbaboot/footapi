import React from 'react';
import { Switch, NavLink, Route } from 'react-router-dom';
import TopScorers from './components/TopScorers';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Chapionnat de France de Ligue 1 Conforama</h1>
      <NavLink className="menu" to="/">Accueil</NavLink>
      <NavLink className="menu" to="/buteurs">Meilleurs buteurs</NavLink>
      <Switch>
        <Route exact path="/buteurs" component={TopScorers} />
      </Switch>
    </div>
  );
}

export default App;
