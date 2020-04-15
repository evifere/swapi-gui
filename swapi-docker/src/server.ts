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
 // const mongoose = await connect('mongodb://swapiapp:swapipwd@e1f0addaa1e3:27017/swapidb', {useNewUrlParser: true});
  //await mongoose.connection;
  

  const server = new ApolloServer({ schema });
  const app = Express();
  server.applyMiddleware({ app, path: '/' });
  app.listen({ port: 80 }, () =>
    console.log(`🚀 Server ready and listening on ${GraphQLEndpoint} at ==> http://localhost:80${server.graphqlPath}`))
};

main().catch((error) => {
  console.log(error, 'error');
})