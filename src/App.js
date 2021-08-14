import React from 'react';
import {
  BrowserRouter as Router,
} from "react-router-dom";

import { withAuth0 } from '@auth0/auth0-react';

import BrowserRouter from './BrowserRouter';
import axios from 'axios';


// const { user, isLoading, isAuthenticated } = this.props.auth0;

class App extends React.Component {



  render() {

    return(
      <>
        <Router>
          <BrowserRouter/>
        </Router>
      </>
    );
  }
}

export default withAuth0(App);
