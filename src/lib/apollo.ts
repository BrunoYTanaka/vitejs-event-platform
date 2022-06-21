import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://api-sa-east-1.graphcms.com/v2/cl4o9ad411etf01z275mv70vy/master",
  cache: new InMemoryCache(),
});
