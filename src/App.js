import React, {useState} from 'react'
import About from "./components/about"
import Login from "./components/login"
import Dash from './components/dash'
import Footer from './components/footer'
import Nav from "./components/nav"
import Hero from './components/hero'
import './App.css';



function App() {
  const [currentPage, setCurrentPage] = useState("")

  function displayPage(){
    if(currentPage === "About"){
      return <About></About>;
    }else if(currentPage === "Login"){
      return <Login></Login>
    } else if (currentPage === "Dashboard"){
      return <Dash></Dash>
    }

  }

  return (
    <>
      <div className="bg-primary min-h-screen">
        <Nav setCurrentPage={setCurrentPage}/>
        <Hero />
        
        {displayPage()}
      </div>
      <Footer />
    </>
  )
}

export default App