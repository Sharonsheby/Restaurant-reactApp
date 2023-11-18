import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

function Header() {
  return (
    <div>
    <Navbar className="bg-body-dark">
    <Container>
      <Navbar.Brand href="#home">
        <img
          alt=""
          src="https://i.postimg.cc/25GLqQYQ/logo.png"
          width="50"
          height="40"
          className="d-inline-block align-top"
        />{' '}
        <span className='' style={{color:'white'}}>Find Best</span>
      </Navbar.Brand>
    </Container>
  </Navbar>
  </div>
  )
}

export default Header