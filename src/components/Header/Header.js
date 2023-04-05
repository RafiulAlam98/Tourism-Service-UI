import React from 'react';
import { Container, Nav, Navbar,Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../hooks/UseAuth/useAuth';

import './Header.css'

const Header = () => {
     const {user,userSignOut} = useAuth()
     return (
          <>
          <Navbar
            sticky="top"
            
            variant="dark"
            expand="lg"
            className="navbar-style"
          >
            <Container fluid>
              <Navbar.Brand to="/home">
               <Nav.Link as={HashLink} className="text-warning" to="/home">
                <span className="head-col fw-bold">GLOBAL</span>
                <span className="text-color fw-bold"> VOYAGES</span>
               </Nav.Link>
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="navbarScroll" />
              <Navbar.Collapse id="navbarScroll">
                <Nav
                  className="ms-auto my-2 my-lg-0"
                  style={{ maxHeight: '100px' }}
                  navbarScroll
                >
                  <Nav.Link as={HashLink} className="text-dark fw-bold" to="/home">
                    HOME
                  </Nav.Link>
                  <Nav.Link as={HashLink} className="text-dark fw-bold" to="/orders">
                    ORDERS
                  </Nav.Link>
                  <Nav.Link as={HashLink} className="text-dark fw-bold" to="/myorders">
                    MY ORDER
                  </Nav.Link>
    
                  <Nav.Link as={Link} className="text-dark fw-bold" to="/manageOrders">
                    MANAGE ORDER
                  </Nav.Link>

                  <Nav.Link as={Link} className="text-dark fw-bold" to="/admin">
                  ADMIN
                  </Nav.Link>
    
                  <Navbar.Text className="text-dark fw-bold">
                    {
                    user.email && <Navbar.Brand className="text-dark fw-bold mx-5" >Signed In As: <span className="text-danger">{user.displayName}</span></Navbar.Brand>
                    }
                  </Navbar.Text>
    
                  {user.email ?  (
                    <Button onClick={userSignOut} variant="dark" type="submit" className="text-warning ">
                      SIGN OUT
                    </Button>
                  ) : (
                    <Nav.Link as={HashLink}  className="text-dark fw-bold" to="/login">
                         Sign In
                    </Nav.Link>
                  )}
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </>
         
     );
};

export default Header;





