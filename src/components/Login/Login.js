import React from 'react';
import Button from 'react-bootstrap/Button';
import useAuth from './../Hooks/UseAuth/useAuth';


const Login = () => {
     const {signInUsingGoogle} = useAuth()
     return (
          <div>
               <Button onClick={signInUsingGoogle} variant="outline-primary">Primary</Button>
          </div>
     );
};

export default Login;