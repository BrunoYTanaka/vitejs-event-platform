import { ApolloProvider } from "@apollo/client";
import { BrowserRouter } from "react-router-dom";
import { Routers } from "./routes";
import { client } from "./lib/apollo";

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Routers />
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
