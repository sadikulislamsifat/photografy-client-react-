import React, {createContext, useEffect, useState} from 'react';
import app from '../../firebase/firebase.config';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth';
// import Singup from './../../Pages/Singup/Singup';


 export const AuthContext = createContext();
 const auth = getAuth(app)

const AuthProvide = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)



    const loginProvider = (Provider) => {
        setLoading(true);
        return signInWithPopup(auth, Provider)
    }

    const createUser =  (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const singIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    const updateUserProfile = (profile) => {
        return updateProfile(auth.currentUser, profile);
    }

    const logOut = () => {
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
         //   console.log(currentUser)  ;
           setUser(currentUser);
           setLoading(false);
         });
         return () => {
             return unsubscribe();
         }
     },[])

    const authInfo = {
        createUser,
        loginProvider,
        user,
        singIn,
        logOut,
        loading
        


    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvide;