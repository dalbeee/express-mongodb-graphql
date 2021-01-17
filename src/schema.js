import { makeExecutableSchema } from "graphql-tools";
import User from "./models/User";

const typeDefs = `
    type User {
      id: ID!
      name: String
      getAllPost: [Post!]!
      joinDate: Date
      LastLoggedIn: Date
      LoggedIn: Boolean
    }

    type Post {
      id: ID!
      title: String!
      content: String!
      writtenBy: User!
      createdBy: Date!
      removedBy: Date!
    }

    type Date {
      time: String!
    }

    type Query{
      allUsers: [User!]!
      getUser(_id: ID): User!
    }

    type Mutation{
      createUser(name: String): User!
    }
`;

const resolvers = {
  Query: {
    allUsers: async () => await User.find(),
    getUser: async (parent, { _id }) => {
      return await User.findById(_id);
    },
  },
  Mutation: {
    createUser: async (parent, args) => {
      console.log(args);
      const newUser = new User(args);
      return await newUser.save();
    },
  },
};

const schema = makeExecutableSchema({ typeDefs, resolvers });

export default schema;
