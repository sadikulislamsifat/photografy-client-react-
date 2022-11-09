import React, {createContext, useEffect, useState} from 'react';
import app from '../../firebase/firebase.config';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth';
import Singup from './../../Pages/Singup/Singup';


 export const AuthContext = createContext();
 const auth = getAuth(app)

const AuthProvide = ({children}) => {
    const [user, setUser] = useState({});



    const loginProvider = (Provider) => {
        return signInWithPopup(auth, Provider)
    }

    const createUser =  (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const singIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    };

    const updateUserProfile = (profile) => {
        return updateProfile(auth.currentUser, profile);
    }

    const logOut = () => {
        return signOut(auth);
    }

    const authInfo = {
        createUser,
        loginProvider,
        user,
        singIn,
        logOut,
        


    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvide;