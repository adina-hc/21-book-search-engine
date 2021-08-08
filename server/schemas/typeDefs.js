// Import apollo server
const { gql } = require("apollo-server-express");

//Define types, queries and mutations
const typeDefs = gql`
  # Define Book model fields
  type Book {
    _id: ID!
    bookId: String
    authors: [String]
    description: String
    title: String
    image: String
    link: String
  }

  # Define User model fields
  type User {
    _id: ID!
    username: String
    email: String
    bookCount: Int
    savedBooks: [Book]
  }

  # Define Auth fields
  type Auth {
    token: ID!
    user: User
  }

  # Define Query type
  type Query {
    me: User
  }

  # Input type to handle parameters for book mutation
  input BookInfo {
    bookId: String
    authors: [String]
    description: String!
    title: String!
    image: String
    link: String
  }

  # Define Mutation type
  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(bookData: BookInfo!): User
    removeBook(bookId: ID!): User
  }
`;

module.exports = typeDefs;
