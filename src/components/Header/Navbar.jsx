import {useEffect} from 'react';
import './navbar.css'
import 'font-awesome/css/font-awesome.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css'


function Navbar() {
    useEffect(() => {
        AOS.init({
            
            duration:1000,
            easing:"ease"
        });
     });
    return (
        <div className='navbar'>
            <div className='navbar-seach' data-aos="fade-right">
                <h2>EN</h2>
                <input type='text'></input>
                <span><i className="fa fa-search"></i> </span>
            </div>
            <h1 className='logo' data-aos="zoom-in">E-Shop.</h1>
            <div className="navbar-signin" data-aos="fade-left">
                <h2>REGISTER</h2>
                <h2>SIGN IN</h2>
                <span><i className="fa fa-shopping-cart"></i></span>
                <span className="navbar-number-cart">4</span>
            </div>
        </div>
    );
}

export default Navbar;