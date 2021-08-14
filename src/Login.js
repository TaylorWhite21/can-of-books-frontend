  
// this came from Auth0 DOCS
// https://auth0.com/docs/quickstart/spa/react#add-login-to-your-application

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.css';
import { useAuth0 } from "@auth0/auth0-react";
import Button from 'react-bootstrap/Button'
import axios from 'axios'

  // Borrowed from demo code
  const makeRequest = async() => {

    const { getIdTokenClaims } = this.props.auth0;
    let tokenClaims = await getIdTokenClaims();
    const jwt = tokenClaims.__raw;
    const config = {
      headers: {"Authorization" : `Bearer ${jwt}`},
    };

    const serverResponse = await axios.get('http://localhost:3000/test', config);

    console.log('it worked if data:  ', serverResponse);
  };

const LoginButton = () => {

  const { loginWithRedirect } = useAuth0();

  
  return <Button variant="primary" onClick={() => {loginWithRedirect(); makeRequest();}}>Log In</Button>;
};


export default LoginButton;
