import React from 'react';
import { Container, Nav, Navbar,Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from './../Hooks/UseAuth/useAuth';

const Header = () => {
     const {user,userSignOut} = useAuth()
     return (
          <>
          <Navbar
            sticky="top"
            bg="dark"
            variant="dark"
            expand="lg"
            className="navbar-style"
          >
            <Container fluid>
              <Navbar.Brand to="/home">
                
               <Nav.Link as={HashLink} className="text-warning" to="/home">
                <span className="text-white">TOURISM  </span>
                <span className="text-warning">AND </span>
                <span className="text-info">TRAVEL </span>
               </Nav.Link>
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="navbarScroll" />
              <Navbar.Collapse id="navbarScroll">
                <Nav
                  className="ms-auto my-2 my-lg-0"
                  style={{ maxHeight: '100px' }}
                  navbarScroll
                >
                  <Nav.Link as={HashLink} className="text-warning" to="/home">
                    HOME
                  </Nav.Link>
                  <Nav.Link as={HashLink} to="/orders">
                    ORDERS
                  </Nav.Link>
                  <Nav.Link as={HashLink} to="/myorders">
                    MY ORDER
                  </Nav.Link>
    
                  <Nav.Link as={Link} to="/manageOrders">
                    MANAGE ORDER
                  </Nav.Link>

                  <Nav.Link as={Link} to="/admin">
                  ADMIN
                  </Nav.Link>
    
                  <Navbar.Text className="text-white mx-5">
                    {
                    user.email && <Navbar.Brand>Signed In As: {user.displayName}</Navbar.Brand>
                    }
                  </Navbar.Text>
    
                  {user.email ?  (
                    <Button onClick={userSignOut} variant="info" type="submit">
                      LOGOUT
                    </Button>
                  ) : (
                    <Nav.Link as={HashLink} to="/login">
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





