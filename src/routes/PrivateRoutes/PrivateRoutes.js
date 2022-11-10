import React, {useContext} from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from './../../context/AuthProvider/AuthProvide';
import useTitle from './../../hooks/useTitle';

const PrivateRoutes = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();

    if(loading){
        return <h1 className='text-3xl text-red-500'>Loading....</h1>
    }
    if(user){
        return children;
    }
    if(!user){
        return <Navigate to='/login' state={{from: location}} replace></Navigate>
    }
    return <Navigate state={{from : location}} replace></Navigate>
};

export default PrivateRoutes;