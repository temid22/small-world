import { createContext, useEffect, useState } from 'react';
import { fireAuth } from '../firebaseConfig';
import { onAuthStateChanged } from 'firebase/auth';


export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState({});

    useEffect(() => {
        const unSub = onAuthStateChanged(fireAuth, (user) => {
            setCurrentUser(user);
            console.log("AuthContext log:-", user);
        });

        return () => {
            unSub();
        };
    }, []);

    return (
        <AuthContext.Provider value={{ currentUser }}>
            {children}
        </AuthContext.Provider>
    );
};
