import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }

`;

export const ADD_USER = gql`  
    mutation addUser($username: String!, $password: String!, $email: String!) {
      addUser(username: $username, password: $password, email: $email) {
        token
        user {
          _id
          username
          email
        }
      }
    }
`;

export const SAVE_BOOK = gql`  
    mutation saveBook($BookInfo: BookInput!) {
      saveBook(bookInfo: $bookInfo) {
        {
          _id
          username
          email
          bookCount
          savedBooks {
            bookId
            authors
            description
            title
            image
            link
          }
        }
        token
      }
    }
`;

export const REMOVE_BOOK = gql` 
    mutation removeBook($bookId: ID!) {
      removeBook(bookId:$bookId) {
        _id
        username
        email
        bookCount
        savedBooks {
          bookId
          authors
          description
          title
          image
          link
        }
      }
    }
`;
