import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.css';
import { withAuth0 } from '@auth0/auth0-react';
import Button from 'react-bootstrap/Button'
import React from 'react';


  function DeleteBook (){
    
    return (
      <>
        <Button variant="primary" onClick={() => this.props.handleDelete()}>Delete Book</Button>
      </>
    );
  };

export default withAuth0(DeleteBook);
