// Import apollo server
const { gql } = require("apollo-server-express");

//Define types, queries and mutations
const typeDefs = gql`
  # Define User model fields
  type User {
    _id: ID
    username: String
    email: String
    password: String
    bookCount: Int
    savedBooks: [Book]
  }

  # Define Auth fields
  type Auth {
    token: ID!
    user: User
  }

  # Define Book model fields
  type Book {
    bookId: String
    authors: [String]
    description: String
    title: String
    image: String
    link: String
  }

  # Input type to handle parameters for book mutation
  input bookInfo {
    bookId: String
    authors: [String]
    description: String
    title: String
    image: String
    link: String
  }

  # Define Query type
  type Query {
    me: User
  }

  # Define Mutation type
  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(input: bookInfo!): User
    removeBook(bookId: ID!): User
  }
`;

module.exports = typeDefs;
