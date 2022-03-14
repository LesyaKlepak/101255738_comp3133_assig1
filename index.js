const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const dotenv = require('dotenv');
dotenv.config();

const mongodb_atlas_url = process.env.MONGODB_URL;

mongoose.connect(mongodb_atlas_url, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(success => {
  console.log('Success Mongodb connection')
}).catch(err => {
  console.log('Error Mongodb conn ection')
});

const express = require('express')
    , http = require('http')
    , path = require('path');
const { ApolloServer } = require('apollo-server-express');

async function startExpressApolloServer() {

    const { typeDefs } = require('./graphql/schema/schema');
    const { resolvers } = require('./graphql/resolvers/resolvers');
    const server = new ApolloServer({ typeDefs, resolvers });
    await server.start();
    const app = express();
   

    server.applyMiddleware({ app, path: '/graphql' });

    await new Promise(resolve => app.listen({ port: 3000}, resolve));
    console.log(`Server ready at http://localhost:3000${server.graphqlPath}`);
    return { server, app };
}

startExpressApolloServer();
