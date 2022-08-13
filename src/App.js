import React, { useState } from "react";
// import { Routes, Route, BrowserRouter } from "react-router-dom";
import About from "./pages/about";
// import Register from "./pages/register";
import Login from "./pages/login";
import Dash from "./pages/dashboard";
import Footer from "./pages/footer";
import Nav from "./pages/nav";
import Hero from "./pages/hero";
// import "react-toastify/dist/ReactToastify.css";
import "./App.css";

function App() {
  const [currentPage, setCurrentPage] = useState("");

  function displayPage() {
    if (currentPage === "About") {
      return <About></About>;
    } else if (currentPage === "Login") {
      return <Login></Login>;
    } else if (currentPage === "Dashboard") {
      return <Dash></Dash>;
    }
    return <Hero />;
  }

  return (
    <>
      <div className="bg-primary ">
        <Nav setCurrentPage={setCurrentPage} />

        {displayPage()}
      </div>
      <Footer />

      {/* {Browser router stuff}
      <Nav />
      <BrowserRouter>
        <Routes>
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route exact path="/nav" element={<Nav />} />
          <Route exact path="/footer" element={<Footer />} />
          <Route exact path="/" element={<Login />} />
        </Routes>
      </BrowserRouter> */}
    </>
  );
}

export default App;