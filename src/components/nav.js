import React from 'react'

function Nav(props) {
  return (
    <div>
        <button onClick={() => props.setCurrentPage(0)}>About</button>
        <button onClick={() => props.setCurrentPage(1)}>Login</button>
        <button onClick={() => props.setCurrentPage(2)}>Dashboard</button>
    </div>
  )
}

export default Nav