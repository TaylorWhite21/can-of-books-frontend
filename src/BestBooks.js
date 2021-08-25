import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import './BestBooks.css';
import axios from 'axios'
import { withAuth0 } from '@auth0/auth0-react';
import Card from 'react-bootstrap/Card'
import CardColumns from 'react-bootstrap/CardColumns'
import AddBook from './AddBook.js'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import UpdateBookFormModal from './UpdateBookFormModal.js';

class MyFavoriteBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      showModal: false,
      selectedBook: null
    }
  };

  handleClose = () => {
    this.setState({ showModal: false, });
  };

  handleShow = (book) => {
    this.setState({
      showModal: true,
      selectedBook: book
    });
  };

  componentDidMount = async () => {
    const { getIdTokenClaims } = this.props.auth0;
    let tokenClaims = await getIdTokenClaims();
    const jwt = tokenClaims.__raw;
    const config = {
      headers: { "Authorization": `Bearer ${jwt}` },
      params: { email: this.props.auth0.user.email },
    };

    const results = await axios.get('http://localhost:3001/books', config);
    this.setState({
      books: results.data,
    });
    console.log(this.state.books)
  };

  // Borrowed from demo code
  serverRequest = async () => {

    const { getIdTokenClaims } = this.props.auth0;
    let tokenClaims = await getIdTokenClaims();
    const jwt = tokenClaims.__raw;
    console.log(jwt)
    const config = {
      headers: { "Authorization": `Bearer ${jwt}` },
    };

    const serverResponse = await axios.get('http://localhost:3001/books', config);

    console.log('it worked if data:  ', serverResponse);
  };

  handleAddBook = async (bookInfo) => {
    try {
      let addbook = await axios.post('http://localhost:3001/books', bookInfo);
      let newBook = addbook.data;
      this.setState({
        books: [...this.state.books, newBook],
      })
    } catch (err) {
      console.log(err);
    };
  };

  handleDeleteBook = async (id) => {
    try {

      const { getIdTokenClaims } = this.props.auth0;
      let tokenClaims = await getIdTokenClaims();
      const jwt = tokenClaims.__raw;
      const config = {
        headers: { "Authorization": `Bearer ${jwt}` },
        params: { email: this.props.auth0.user.email },
      };

      await axios.delete(`http://localhost:3001/books/${id}`, config);
      let remainingBooks = this.state.books.filter(book => book.id !== id)
      console.log(id);
      this.setState({
        books: remainingBooks
      });
    } catch (err) {
      console.log(err);
    }
  };

  handleUpdate = async (book) => {
    try {
      await axios.put(`http://localhost:3001/books/${book._id}`, book);
    } catch (error) {
      console.log(error);
    }
    const updateBook = this.state.books.map(bookState => {
      if (bookState._id === book._id) {
        return book
      } else {
        return bookState;
      }
    })
    this.setState({ books: updateBook });
  };

  render() {
    console.log('Books', this.state.selectedBook)
    return (
      <>
        <Jumbotron>
          <h1>My Favorite Books</h1>
          <p>
            This is a collection of my favorite books
          </p>

          {this.state.books.length > 0 ? this.state.books.map(book => (
            <CardColumns>
              <Card id='books'>
                <Card.Body>
                  <Card.Title>{book.title}</Card.Title>
                  <Card.Text>{book.description}</Card.Text>
                  <h4>{book.email}</h4>
                  <h4>{book.status}</h4>
                  <Button variant='primary' onClick={() => this.handleShow(book)}>Update</Button>
                  <Button variant="primary" onClick={() => { this.handleDeleteBook(book._id) }}>Delete Book</Button>

                </Card.Body>
              </Card>
              <Modal show={this.state.showModal} onHide={this.handleClose}>
                <Modal.Header closeButton>Update Book</Modal.Header>
                <Modal.Body>
                  <UpdateBookFormModal handleUpdate={this.handleUpdate} handleShow={this.handleShow} handleClose={this.handleClose} book={this.state.selectedBook}></UpdateBookFormModal>
                </Modal.Body>
              </Modal>
            </CardColumns>
          )) : 'error'}
          <button onClick={this.serverRequest}>Click to send to server</button>
          <p>Check the console</p>
          <AddBook handleAddBook={this.handleAddBook} />
        </Jumbotron>
      </>
    )
  }
}

export default withAuth0(MyFavoriteBooks);
