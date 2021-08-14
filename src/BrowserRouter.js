import React from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './Header';
import IsLoadingAndError from './IsLoadingAndError';
import Footer from './Footer';


import BestBooks from './BestBooks';
import Login from './Login';
import Profile from './Profile.js';



class BrowserRouter extends React.Component {

  render() {
    return (

      <>
        <Router>
          <IsLoadingAndError>
            <Header />
            <Switch>
              <Route exact path="/">
                {/*DONE!!!!  TODO: if the user is logged in, render the `BestBooks` component, if they are not, render the `Login` component */}
                {this.props.auth0.isAuthenticated ? <BestBooks /> : <Login />}
              </Route>
              <Route exact path="/profile">
                {/*DONE:  TODO: add a route with a path of '/profile' that renders a `Profile` component */}
                {this.props.auth0.isAuthenticated ? <Profile /> : ' I am here'}
              </Route>
            </Switch>
            <Footer />
          </IsLoadingAndError>
        </Router>
      </>
    )
  }
}

export default withAuth0(BrowserRouter);
