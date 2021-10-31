import { IconButton } from '@mui/material';
import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../Hooks/useAuth';
import GoogleIcon from '@mui/icons-material/Google';


const Login = () => {
    const { signInUsingGoogle, error, setError } = useAuth()
    const history = useHistory()
    const location = useLocation()
    const redirect_url = location.state?.from || "/"

    const handleGoogleSignIn = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_url)
            })
            .catch(error => {
                setError(error.message)
            })
    }

    return (
        <div className="App">
            <h2>Google Sign In</h2>
            <IconButton onClick={handleGoogleSignIn} sx={{ color: "#26a69a" }} aria-label="googleSignIn" size="large">
                <GoogleIcon />
            </IconButton>
            <span className="text-danger">{error}</span>
        </div>
    );
};

export default Login;