const { ApolloServer, PubSub } = require('apollo-server'); 
const mongoose = require('mongoose');


const resolvers = require('./graphql/resolvers/index');
const { MONGODB } = require('./config.js');
const typeDefs = require('./graphql/typeDefs');

const pubsub = new PubSub();



const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req }) => ({ req, pubsub })
});

mongoose.connect(MONGODB, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('MongoDB connected');
        return server.listen({ port:5000 });

    })
   .then(res => {
    console.log(`server running on port at ${res.url}`);
});



