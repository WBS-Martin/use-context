import React from "react";
import { Link } from 'react-router-dom';

const Signup = () => {

    const notImplemented = () => {
        alert('We\'re sorry, this functionality is not implemented yet!')
    }

    return ( 
        <>
        <input type="text" placeholder="Email"/>
        <input type="text" placeholder="Password"/>
        <button onClick={notImplemented}>Register</button>
        <br/>
        <Link to="/signin">Login</Link>
        </>
     );
}
 
export default Signup;