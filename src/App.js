import React, { useState } from "react";
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
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Signup from "./pages/register";

const httpLink = createHttpLink({
  uri: "http://localhost:4000/graphql",
});

const client = new ApolloClient({
  link: httpLink,
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
              <Route exact path="/Dashboard" element={<Dashboard />} />
              {/* <Route path="/Dashboard">
                <Route path=":username" element={<Dash />} />
                <Route path="" element={<Dash />} />
              </Route> */}
              {/* <Route exact path="/Dashboard" element={<Dash />} /> */}
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
