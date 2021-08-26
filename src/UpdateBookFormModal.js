// this came from Auth0 DOCS
// https://auth0.com/docs/quickstart/spa/react#add-login-to-your-application

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.css';
import { withAuth0 } from '@auth0/auth0-react';
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

class UpdateBookFormModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      _id: this.props.book._id,
      title: this.props.book.title,
      description: this.props.description,
      email: this.props.auth0.user.email,
      status: this.props.book.status,
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
  
    this.props.handleUpdate(this.state);
    console.log('handlesubmit state', this.state)
    this.props.handleClose();
  }

  handleTitle = (e) => {
    e.preventDefault();
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
    e.preventDefault();
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
            <Form.Control type="text" onChange={this.handleTitle} value={this.state.title} />
          </Form.Group>

          <Form.Group controlId="description">
            <Form.Label>Book Description</Form.Label>
            <Form.Control type="text" onChange={(e) => this.setState({ description: e.target.value})} value={this.state.description} />
          </Form.Group>

          <Form.Group controlId="status">
            <Form.Label>Book Status</Form.Label>
            <Form.Control type="text" onChange={this.handleStatus} value={this.state.status} />
          </Form.Group>
          <Button variant="primary" type='submit' >
          Update Book
          </Button>
        </Form >


      </>
    )
  }
};

export default withAuth0(UpdateBookFormModal);
