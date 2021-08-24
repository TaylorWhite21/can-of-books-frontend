// this came from Auth0 DOCS
// https://auth0.com/docs/quickstart/spa/react#add-login-to-your-application

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.css';
import { withAuth0 } from '@auth0/auth0-react';
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'

class BookFormModal extends React.Component {

  handleSubmit = (e) => {
    e.preventDefault();
    let title = e.target.title.vale;
    let description = e.target.description.value;
    // let email = e.target.email.value;
    let status = e.target.status.value;
    this.props.handleAddBook({ title, description, status });
  }

  render() {


    return (

      <Modal show={this.props.show} onHide={this.props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={this.handleSubmit}>
            <Form.Group controlId="title">
              <Form.Label>Book Title</Form.Label>
              <Form.Control type="text" placeholder="Enter Book Title" />
            </Form.Group>

            <Form.Group controlId="description">
              <Form.Label>Book Description</Form.Label>
              <Form.Control type="text" placeholder="Enter Book Description" />
            </Form.Group>

            {/* <Form.Group controlId="email">
              <Form.Label>Book Email</Form.Label>
              <Form.Control type="text" placeholder="Enter Book Email" />
            </Form.Group> */}

            <Form.Group controlId="status">
              <Form.Label>Book Status</Form.Label>
              <Form.Control type="text" placeholder="Enter Book Status" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.props.handleClose}>
            Close
          </Button>
          <Button variant="primary" type='submit'>
            Add New Book
          </Button>
        </Modal.Footer>
      </Modal>
    )
  }
};

export default withAuth0(BookFormModal);
