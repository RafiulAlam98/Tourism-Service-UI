import React from 'react';
import { Container, Nav, Navbar,Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from './../Hooks/UseAuth/useAuth';

const Header = () => {
     const {user,userSignOut} = useAuth()
     return (
          <>
          <Navbar bg="dark" variant="dark">
               <Container>
                    <Navbar.Brand>Navbar</Navbar.Brand>
                    {
                         user.email && <Navbar.Brand>Signed In As: {user.displayName}</Navbar.Brand>
                    }
                    <Nav className="me-auto">
                         <Link to="/home">Home</Link>
                         
                         
                      {
                           user.email ? 
                           <Button onClick={userSignOut} className="ms-2" variant="outline-primary">Sign Out</Button>
                           :(<Link to="/login">Sign In</Link>)

                      }
                         
                    </Nav>
               </Container>
          </Navbar>
          </>
     );
};

export default Header;