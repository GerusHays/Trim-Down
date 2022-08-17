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
import Profile from "./pages/profile";
import Footer from "./pages/footer";
import Header from "./pages/header";
import Hero from "./pages/hero";
import Nav from "./pages/nav";
import "react-toastify/dist/ReactToastify.css";
// import "./App.css";
import Signup from "./pages/register";
import Auth from "../src/utils/auth";


const httpLink = createHttpLink({
  uri: '/graphql',
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
        <div className="flex-column justify-flex-start min-100-vh">
          <Router>
          <div className="container"></div>
          {/* <Nav /> */}
            <Nav />
            {Auth.loggedIn() ? (
              <></>
            ) : (
              <>
                <Hero />
              </>
            )}
            <Routes>
              <Route exact path="/register" element={<Signup />} />
              <Route exact path="/login" element={<Login />} />
              <Route path="/profile">
                <Route path=":username" element={<Profile />} />
                <Route path="" element={<Profile />} />
              </Route>
              <Route exact path="/about" element={<About />} />
            </Routes>
          </Router>
          <Footer />
        </div>
      </ApolloProvider>
  );
}
