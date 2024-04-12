import { BrowserRouter } from "react-router-dom";
import { Routes } from "./router/router";
import client from "./apollo/client.ts";
import { ApolloProvider } from "@apollo/client";

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
