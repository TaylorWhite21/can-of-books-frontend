import React from 'react';
import {
  BrowserRouter as Router,
} from "react-router-dom";

import { withAuth0 } from '@auth0/auth0-react';

import BrowserRouter from './BrowserRouter';


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
