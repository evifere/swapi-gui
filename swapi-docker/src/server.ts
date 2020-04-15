require("dotenv").config();

import "reflect-metadata";
//import { ApolloServer } from "apollo-server";
import { ApolloServer } from "apollo-server-express";
import Express from "express";
import { buildAppSchema } from "./schema";
import { GraphQLEndpoint } from "./endpoints";
import {connect} from "mongoose";

process.on("SIGINT", () => {
  console.log("Shutting down...");
  process.exit();
});

const main = async () => {
  const schema = await buildAppSchema();
  // create mongoose connection
  const mongoose = await connect('mongodb://swapi:swapipwd@sw.db.local:27017/swapidb', {useNewUrlParser: true, useUnifiedTopology: true });
  
  console.log('await mongoose connection')
  await mongoose.connection;
  
  console.log('db connection done')

  const server = new ApolloServer({ schema });
  const app = Express();
  server.applyMiddleware({ app, path: '/' });
  app.listen({ port: 80 }, () =>
    console.log(`🚀 Server ready and listening on ${GraphQLEndpoint} at ==> http://localhost:80${server.graphqlPath}`))
};

main().catch((error) => {
  console.log(error, 'error');
})