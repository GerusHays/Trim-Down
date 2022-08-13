import React from "react";
import Register from "./pages/register";
import Login from "./pages/login";
import Dashboard from "./pages/dashboard";
import Footer from "./pages/footer";
import Nav from "./pages/nav";
import { Routes, Route, BrowserRouter } from "react-router-dom";
// import "react-toastify/dist/ReactToastify.css";
import "./App.css";

export default function App() {
  return (
    <>
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
      </BrowserRouter>
    </>
  );
}

// function App() {
//   const [currentPage, setCurrentPage] = useState(0);

//   function displayPage() 
//     if (currentPage === 0) {
//       return <About></About>;
//     } else if (currentPage === 1) {
//       return <Login></Login>;
//     } else if (currentPage === 2) {
//       return <Dash></Dash>;
//     }
//   }

//   return (
//     <>
//       <Nav setCurrentPage={setCurrentPage} />
//       {displayPage()}
//       <main>
//         <Footer></Footer>
//       </main>
//     </>
//   );
// }
