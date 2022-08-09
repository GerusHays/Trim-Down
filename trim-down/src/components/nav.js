import React from 'react'

function Nav(props) {
  return (
    <div>
        <button onClick={() => props.setCurrentPage(0)}>About</button>
        <button onClick={() => props.setCurrentPage(1)}>Login</button>
    </div>
  )
}

export default Nav