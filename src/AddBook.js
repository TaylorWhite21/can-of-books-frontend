// this came from Auth0 DOCS
// https://auth0.com/docs/quickstart/spa/react#add-login-to-your-application

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.css';
import { withAuth0 } from '@auth0/auth0-react';
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

class AddBook extends React.Component {

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.handleAddBook(this.state);
    this.props.handleAddClose();
  }

  handleTitle = (e) => {
    this.setState({
      title: e.target.value
    })
  }

  handleDescription = (e) => {
    this.setState({
      description: e.target.value
    })
  }

  handleStatus = (e) => {
    this.setState({
      status: e.target.value
    })
  }

  render() {
    return (
      <>
        <Form onSubmit={this.handleSubmit} >
          <Form.Group controlId="title">
            <Form.Label>Book Title</Form.Label>
            <Form.Control type="text" onChange={this.handleTitle} placeholder='Enter Book Title Here...' />
          </Form.Group>

          <Form.Group controlId="description">
            <Form.Label>Book Description</Form.Label>
            <Form.Control type="text" onChange={(e) => this.setState({ description: e.target.value})} placeholder='Enter Book Description Here...' />
          </Form.Group>

          <Form.Group controlId="status">
            <Form.Label>Book Status</Form.Label>
            <Form.Control type="text" onChange={this.handleStatus} placeholder='Enter Book Status Here... '/>
          </Form.Group>
          <Button variant="primary" type='submit' >
          Add Book
          </Button>
        </Form >
      </>
    )
  }
};

export default withAuth0(AddBook);
