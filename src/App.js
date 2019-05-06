import React from 'react';
import { Switch, NavLink, Route } from 'react-router-dom';
import TopScorers from './components/TopScorers';
import Effectifs from './components/Effectifs';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Chapionnat de France de Ligue 1 Conforama</h1>
      <NavLink className="menu" to="/">Accueil</NavLink>
      <NavLink className="menu" to="/buteurs">Meilleurs buteurs</NavLink>
      <NavLink className="menu" to="/effectifs">Joueurs par équipes</NavLink>
      <Switch>
        <Route exact path="/buteurs" component={TopScorers} />
        <Route exact path="/effectifs" component={Effectifs} />
      </Switch>
    </div>
  );
}

export default App;
