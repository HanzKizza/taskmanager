import React from 'react'

function Header(props) {
  return (
    <div className='header'>
      <h1>{props.title}</h1>
      <h5>Hello from {props.name}</h5>
    </div>
  )
}

export default Header
