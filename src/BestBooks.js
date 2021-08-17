import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import './BestBooks.css';
import axios from 'axios'
import { withAuth0 } from '@auth0/auth0-react';

class MyFavoriteBooks extends React.Component {

  // Borrowed from demo code
  serverRequest = async() => {

    const { getIdTokenClaims } = this.props.auth0;
    let tokenClaims = await getIdTokenClaims();
    const jwt = tokenClaims.__raw;
    const config = {
      headers: {"Authorization" : `Bearer ${jwt}`},
    };

    const serverResponse = await axios.get('http://localhost:3001/test', config);

    console.log('it worked if data:  ', serverResponse);
  };

  render() {
    return(
      <Jumbotron>
        <h1>My Favorite Books</h1>
        <p>
          This is a collection of my favorite books
        </p>
        <button onClick={this.serverRequest}>Click to send to server</button>
        <p>Check the console</p>
      </Jumbotron>
    )
  }
}

export default withAuth0(MyFavoriteBooks);
