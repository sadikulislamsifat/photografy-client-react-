import { GoogleAuthProvider } from 'firebase/auth';
import React, {useContext} from 'react';
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from '../../../context/AuthProvider/AuthProvide';

const GoogleLogin = () => {
    const {loginProvider} = useContext(AuthContext);

    const googleProvider = new GoogleAuthProvider();

    const handleGoogleSingin = () => {
        loginProvider(googleProvider)
        .then(result => {
            const user = result.user;
            console.log(user);
        })
        .catch(e => console.error(e))
    }


    return (
        <span onClick={handleGoogleSingin} className='flex'>
            <FcGoogle className='text-2xl mr-3'></FcGoogle>
              Login with Google
        </span>
        
    );
};

export default GoogleLogin;