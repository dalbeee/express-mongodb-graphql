import express from "express";
import dotenv from "dotenv";
import { graphqlHTTP } from "express-graphql";
import mongodb from "./mongodb";
import schema from "./schema";

dotenv.config();

const app = express();
const PORT = process.env.EXPRESS_PORT || 3001;

mongodb();

app.use(
  `/q`,
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.listen(PORT, () => {
  console.log(`server starting`);
});
