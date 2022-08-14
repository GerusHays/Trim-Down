// import React, { useState } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import About from "./pages/about";
import Login from "./pages/login";
import Dashboard from "./pages/dashboard";
import Footer from "./pages/footer";
import Nav from "./pages/nav";
import Hero from "./pages/hero";
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Signup from "./pages/register";
// import Auth from "../src/utils/auth";

const httpLink = createHttpLink({
  uri: "http://localhost:4000/graphql",
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
    <>
      <ApolloProvider client={client}>
        <div className="flex-column justify-flex-start min-100-vh">
          <div className="container"></div>
          <Nav />
          <BrowserRouter>
            <Routes>
              <Route exact path="/Register" element={<Signup />} />
              <Route exact path="/Login" element={<Login />} />
              <Route path="/Dashboard">
                <Route path=":username" element={<Dashboard />} />
                <Route path="" element={<Dashboard />} />
              </Route>
              <Route exact path="/about" element={<About />} />
            </Routes>
          </BrowserRouter>
          <Hero />
          <Footer />
        </div>
      </ApolloProvider>
    </>
  );
}
