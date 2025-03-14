import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { authContext } from '../authprovider/AuthProvider';


const PrivateRoute = ({children}) => {  
    const {loading,user}=useContext(authContext)

    const location=useLocation()

    if(loading){
        return<div>
            <p className='text-center text-7xl bg-blue-500'>Loading....</p>
        </div>
    }
    if(user){
        return children
    }
    
    return <Navigate state={location.pathname} to='/login'></Navigate>
};

export default PrivateRoute;