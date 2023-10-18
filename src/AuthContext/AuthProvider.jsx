/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import React, { createContext, useContext, useEffect, useState } from 'react';
import auth from '../firebase/firebase.init';

export const AuthContext = createContext()
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    // Create User Start
    const createUser = (email, password) => {
       return createUserWithEmailAndPassword(auth, email, password)
    }
    // Create User End


    // On Auth State Change Start
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false)
        });
        return () => {
            unSubscribe
        }
    },[])
    // On Auth State Change End

    const AuthInfo = {user, createUser}
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;