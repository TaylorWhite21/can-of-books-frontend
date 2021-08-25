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
      description: this.props.book.description,
      status: this.props.book.status,
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.handleUpdate(this.state);
    this.props.handleClose();
  }

  handleName = (e) => {
    e.preventDefault();
    this.setState({
      title: e.target.value
    })
  }

  handleDescription = (e) => {
    e.preventDefault();
    this.setState({
      description: e.target.value
    })
  }

  handleStaus = (e) => {
    e.preventDefault();
    this.setState({
      status: e.target.value
    })
  }

  render() {

    console.log('State Test', this.state)
    return (

      // <Modal show={this.props.show} onHide={this.props.handleClose}>
      <>
      <Form onSubmit = { this.handleSubmit } >
            <Form.Group controlId="title">
              <Form.Label>Book Title</Form.Label>
              <Form.Control type="text" onChange={this.handleTitle} placeholder={this.state.title} />
            </Form.Group>

            <Form.Group controlId="description">
              <Form.Label>Book Description</Form.Label>
              <Form.Control type="text" onChange={this.handledescription} placeholder={this.state.description} />
            </Form.Group>

            <Form.Group controlId="status">
              <Form.Label>Book Status</Form.Label>
              <Form.Control type="text"onChange={this.handleStatus} placeholder={this.state.status} />
            </Form.Group>
          </Form >

      <Button variant="primary" onClick={this.props.handleClose}>
        Update Book
      </Button>
    </>
    )
  }
};

export default withAuth0(UpdateBookFormModal);
