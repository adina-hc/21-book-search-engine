const express = require('express');
// Import ApolloServer
const {ApolloServer} = require('apollo-server-express');
const path = require('path');

const { authMiddleware } = require("./utils/auth");
// Import GraphQL schema typeDefs and resolvers
const { typeDefs, resolvers} = require('./schemas');
const db = require("./config/connection");

const routes = require('./routes');

const PORT = process.env.PORT || 3001;
const app = express();

// Apollo server created to pass schema data
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware,
  introspection: true,
  playground: true,
});

// Integrate Apollo server with Express
server.applyMiddleware({ app });

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.use(routes);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build'));
});


db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`🌍 Now listening on localhost:${PORT}`)
    // log where to test GQL API
    console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
  });
});
