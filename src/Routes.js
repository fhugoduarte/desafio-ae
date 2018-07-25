import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Home from './screens/Home';
import MovieDetails from './screens/MovieDetails';
import PopularMovies from './screens/PopularMovies';
import TopMovies from './screens/TopMovies';
import UpcomingMovies from './screens/UpcomingMovies';

import { paths } from './util/constants';

const routes = () => (
  <div className="content-wrapper" style={{backgroundColor: 'white'}}>
    <Switch>
      <Route exact name="home" path={paths.HOME} component={Home} />
      <Route exact name= "details" path={paths.DETAILS} component={MovieDetails}/>
      <Route exact name="popular" path={paths.POPULAR} component={PopularMovies} />
      <Route exact name="top" path={paths.TOPS} component={TopMovies} />
      <Route exact name="lancamentos" path={paths.LANCAMENTOS} component={UpcomingMovies} />
      <Redirect from='*' to='/' />
    </Switch>
  </div>
);

export default routes;