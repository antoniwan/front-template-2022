import { ApolloClient, InMemoryCache } from "@apollo/client";

const cache = new InMemoryCache();

const client = new ApolloClient({
  uri: "http://localhost:8888/api/graphql",
  cache,
});

export default client;
