import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route,
} from "react-router-dom";

import { PokemonApp } from '../PokemonApp';
import { PokemonView } from '../views/PokemonView';

export const AppRouter = () => {
    return (
        <Router>
      <div>
        <Switch>
          <Route exact path="/" component={PokemonApp} />
          <Route exact path="/pokemon/:id" component={PokemonView}/>
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
        
    )
}
