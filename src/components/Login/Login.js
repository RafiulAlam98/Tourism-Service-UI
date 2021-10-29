import React from 'react';
import Button from 'react-bootstrap/Button';
import { useHistory, useLocation } from 'react-router';
import useAuth from './../Hooks/UseAuth/useAuth';


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
          <div>
               <Button onClick={handleGoogleLogin} variant="outline-primary">Primary</Button>
          </div>
     );
};

export default Login;