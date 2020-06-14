import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import store from './store';
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";

//components
import Admin from './components/dashboard_admin'
import Signin from './components/Authentification/Sign-In/signin'
import Signup from './components/Authentification/Sign-up/signup'
import User from './components/dashboard_user'
function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/signin">
            <Signin />
          </Route>
          <Route exact path="/signup">
            <Signup />
          </Route>
          <Route exact path="/Admin">
            <Admin />
          

          </Route>
          <Route exact path="/user">
            <User />
          

          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}



export default App;
