// Import apollo server
const { gql } = require("apollo-server-express");

//Define types, queries and mutations
const typeDefs = gql`
  # Define Query type
  type Query {
    me: [User]!
  }

  # Define Mutation type
  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(bookInfo: BookInfo!): User
    removeBook(bookId: ID!): User
  }

  # Define User model fields
  type User {
    _id: ID
    username: String
    email: String
    bookCount: Int
    savedBooks: [Book]!
  }

  # Define Book model fields
  type Book {
    bookId: ID!
    authors: [String]
    description: String
    title: String!
    image: String
    link: String
  }

  # Input type to handle parameters for mutation
  input BookInfo {
    bookId: String!
    authors: [String]
    description: String!
    title: String!
    image: String
    link: String
  }

  # Define Auth fields
  type Auth {
    token: ID!
    user: User
  }
`;

module.exports = typeDefs;
