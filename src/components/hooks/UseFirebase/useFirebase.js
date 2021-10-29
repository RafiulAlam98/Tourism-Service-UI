import { GoogleAuthProvider,getAuth,signInWithPopup } from "firebase/auth";
import { useState } from "react";
import initializeAuthentication from "../../../Firebase/firebase.init";


initializeAuthentication()

const useFirebase = () =>{
     const [user,setUser] = useState({})
     const [error,setError] = useState('')
     const googleProvider = new GoogleAuthProvider();
     const auth = getAuth();

     const signInUsingGoogle = () =>{
          signInWithPopup(auth,googleProvider)
               .then(result =>{
                    const user = result.user
                    console.log(user)
                    setUser(user)
               })
               .then(err =>{
                    const errorMessage = err.message;
                    setError(errorMessage)
               })
          
     }

     return {
          user,
          error,
          signInUsingGoogle
     }
}

export default useFirebase