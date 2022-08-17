import React from "react";
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import About from "./pages/about";
import Login from "./pages/login";
import Dashboard from "./pages/dashboard";
import Footer from "./pages/footer";
import Hero from "./pages/hero";
import Nav from "./pages/nav";
import "react-toastify/dist/ReactToastify.css";
import Signup from "./pages/register";


const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="flex-column justify-flex-start min-100-vh">
          <Nav />
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard">
              <Route path=":username" element={<Dashboard />} />
              <Route path="" element={<Dashboard />} />
            </Route>
            <Route path="/about" element={<About />} />
            <Route path="*" element={<div className="w-ful flex justify-center py-4 text-white text-2xl">Wow you broke our site! Go you!</div>} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </ApolloProvider>
  );
}
