import { useState, useEffect } from 'react';
import initializeAuthentication from '../Firebase/firebase.init';
import { GoogleAuthProvider, getAuth, onAuthStateChanged, signOut, signInWithPopup } from "firebase/auth";

initializeAuthentication()

const useFirebase = () => {
    const [user, setUser] = useState([])
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState("")

    const auth = getAuth()
    const googleProvider = new GoogleAuthProvider()

    const signInUsingGoogle = () => {
        return signInWithPopup(auth, googleProvider)
        // .then(result => {
        //     setUser(result)
        // })
    }
    const logout = () => {
        setIsLoading(true)
        signOut(auth)
            .then(result => {
                setUser({})
            })
            .finally(
                setIsLoading(false)
            )
    }
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            }
            else {
                setUser({})
            }
            setIsLoading(false)
        })
    }, [])

    return { signInUsingGoogle, user, logout, isLoading, error, setError };
};

export default useFirebase;