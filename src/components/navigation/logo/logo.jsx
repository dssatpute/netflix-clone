import React from 'react';
import logo from '../../../assets/netflix_logo.svg'
import classes from '../logo/logo.module.css'
const Logo = () => {
    return (
        <div  >
           <img className={classes.logo}  src={logo} alt="" /> 
        </div>
    );
}

export default Logo;
