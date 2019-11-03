import React from 'react'; 
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { RegisterPage, LoginPage, GamePage } from './pages';

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/login" component={LoginPage}/>
        <Route exact path="/register" component={RegisterPage}/>
        <Route exact path='/' component={GamePage}/>
      </Switch>
    </Router>
  );
}

export default AppRouter;