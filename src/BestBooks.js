import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import './BestBooks.css';
import axios from 'axios'
import { withAuth0 } from '@auth0/auth0-react';
import Card from 'react-bootstrap/Card'
import CardColumns from 'react-bootstrap/CardColumns'

class MyFavoriteBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
    }
  }

  componentDidMount = async () => {
    const { getIdTokenClaims } = this.props.auth0;
    let tokenClaims = await getIdTokenClaims();
    const jwt = tokenClaims.__raw;
    const config = {
      headers: { "Authorization": `Bearer ${jwt}` },
    };

    const results = await axios.get('http://localhost:3001/books', config);
    this.setState({
      books: results.data,
    })
    console.log(this.state.books)
  }

  // Borrowed from demo code
  serverRequest = async () => {

    const { getIdTokenClaims } = this.props.auth0;
    let tokenClaims = await getIdTokenClaims();
    const jwt = tokenClaims.__raw;
    const config = {
      headers: { "Authorization": `Bearer ${jwt}` },
    };

    const serverResponse = await axios.get('http://localhost:3001/books', config);

    console.log('it worked if data:  ', serverResponse);
  };

  render() {
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
              </Card.Body>
            </Card>
            </CardColumns>
          )) : 'error'}
          <button onClick={this.serverRequest}>Click to send to server</button>
          <p>Check the console</p>
        </Jumbotron>
      </>
    )
  }
}

export default withAuth0(MyFavoriteBooks);
