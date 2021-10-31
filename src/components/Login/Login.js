import React from 'react';
import { Container, Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { useHistory, useLocation } from 'react-router';
import useAuth from './../Hooks/UseAuth/useAuth';
import './Login.css'

// .then(result =>{
               //      const user = result.user
               //      console.log(user)
               //      setUser(user)
               // })
               // .finally(() =>setIsLoading(false))

const Login = () => {
     const {signInUsingGoogle,setIsLoading} = useAuth()


     const location = useLocation();
     const history = useHistory();
     const redirectUrl = location.state?.from || '/home';
   
     const handleGoogleLogin = () => {
          signInUsingGoogle().then(result => {
         history.push(redirectUrl);
       })
       .finally(() =>setIsLoading(false))
     };
     return (
          <Container className="login-container" fluid w-50 >
               
                    <Form className="form-body  mx-auto">
                         <h1 className="text-color mb-5">Register Or Login</h1>
                         <Form.Group className="mb-4" controlId="formBasicName">

                         <Form.Control type="name" placeholder="Enter Name" />
                         <Form.Text className="text-warning">
                             This Field is necessary
                         </Form.Text>
                         </Form.Group>

                         <Form.Group className="mb-4" controlId="formBasicUserName">
                       
                         <Form.Control type="username" placeholder="Enter Username " />
                         <Form.Text className="text-warning">
                             This Field is necessary
                         </Form.Text>
                         </Form.Group>
                         
                        

                         <Form.Group className="mb-4" controlId="formBasicEmail">
                       
                         <Form.Control type="email" placeholder="Enter email" />
                         <Form.Text className="text-warning">
                              We'll never share your email with anyone else.
                         </Form.Text>
                         </Form.Group>
                         
                         <Form.Group className="mb-4" controlId="formBasicPassword">
                       
                         <Form.Control type="password" placeholder="Enter Password" />
                         <Form.Text className="text-warning">
                              We'll never share your Password with anyone else.
                         </Form.Text>
                         </Form.Group>

                         
                         <Button className="login-btn">Register</Button>  
                         <h4 className="mt-2 mb-2 text-color">OR</h4>
                         <Button onClick={handleGoogleLogin} className="login-btn">Google Login</Button>
                    </Form>
               
          </Container>
     );
};

export default Login;