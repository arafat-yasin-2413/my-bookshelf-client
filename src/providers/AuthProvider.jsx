import React from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { auth } from '../firebase/firebase.init';
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';

const AuthProvider = ({ children }) => {

    const provider = new GoogleAuthProvider();

    

    const createUser = (email,password) => {
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const signInUser = (email, password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }

    const googleLogin = () =>{
        return signInWithPopup(auth, provider);
    }

    const logOutUser = ()=>{
        return signOut(auth)
    }





    const userInfo = {
        createUser,
        signInUser,
        googleLogin,
        logOutUser,
    }

    return (
        <AuthContext value={userInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;