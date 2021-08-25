// this came from Auth0 DOCS
// https://auth0.com/docs/quickstart/spa/react#add-login-to-your-application


import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.css';
import { withAuth0 } from '@auth0/auth0-react';
import Button from 'react-bootstrap/Button'
import BookFormModal from './BookFormModal.js';
import React, { useState } from "react";


  function ShowAddBook (){
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          Add New Book
        </Button>
        <BookFormModal show={show} handleClose={handleClose} />
      </>
    );
  };

export default withAuth0(ShowAddBook);
