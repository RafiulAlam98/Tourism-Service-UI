import React from 'react';
import useAuth from '../hooks/UseAuth/useAuth';

const Login = () => {
     const {user,error,signInUsingGoogle} = useAuth()
     return (
          <div>
               
          </div>
     );
};

export default Login;