import React from 'react'; 
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { RegisterPage, LoginPage, GamePage, MenuPage, MePage } from './pages';

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/login" component={LoginPage}/>
        <Route exact path="/signup" component={RegisterPage}/>
        <Route exact path='/' component={GamePage}/>
        <Route exact path='/game' component={GamePage}/>
        <Route exact path='/me' component={MePage}/>
      </Switch>
    </Router>
  );
}

export default AppRouter;