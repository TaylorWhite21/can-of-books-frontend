  
// this came from Auth0 DOCS
// https://auth0.com/docs/quickstart/spa/react#add-login-to-your-application

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.css';
import { useAuth0 } from "@auth0/auth0-react";
import { withAuth0 } from '@auth0/auth0-react';
import Button from 'react-bootstrap/Button'




const LoginButton = () => {

  const { loginWithRedirect } = useAuth0();

  
  return <Button variant="primary" onClick={() => {loginWithRedirect()}}>Log In</Button>;
};


export default withAuth0(LoginButton);
