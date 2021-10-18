import React from 'react';
import './navbar.css'
import 'font-awesome/css/font-awesome.min.css';


function Navbar(
    
) {
    return (
        <div className='navbar'>
            <div className='navbar-seach'>
                <h2>EN</h2>
                <input type='text'></input>
                <span><i className="fa fa-search"></i> </span>
            </div>
            <h1 className='logo'>LAMA.</h1>
            <div className="navbar-signin">
                <h2>REGISTER</h2>
                <h2>SIGN IN</h2>
                <span><i className="fa fa-shopping-cart"></i></span>
                <span className="navbar-number-cart">4</span>
            </div>
          
        </div>
    );
}

export default Navbar;