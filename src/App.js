import React, { useState } from "react";
import About from "./components/about";
import Login from "./components/login";
import Dash from "./components/dash";
import Footer from "./components/footer";
import Nav from "./components/nav";
import "./App.css";

function App() {
  const [currentPage, setCurrentPage] = useState(0);

  function displayPage() {
    if (currentPage === 0) {
      return <About></About>;
    } else if (currentPage === 1) {
      return <Login></Login>;
    } else if (currentPage === 2) {
      return <Dash></Dash>;
    }
  }

  return (
    <>
      <Nav setCurrentPage={setCurrentPage} />
      {displayPage()}
      <main>
        <Footer></Footer>
      </main>
    </>
  );
}

export default App;
