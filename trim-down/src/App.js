import React, {useState} from 'react'
import About from "./components/about"
import Login from "./components/login"
import Nav from "./components/nav"

function App() {
  const [currentPage, setCurrentPage] = useState(0)

  function displayPage(){
    if(currentPage === 0){
      return <About></About>;
    }else if(currentPage === 1){
      return <Login></Login>
    }
  }

  return (
    <>
      <Nav setCurrentPage={setCurrentPage}/>
      {displayPage()}
    </>
  )
}

export default App