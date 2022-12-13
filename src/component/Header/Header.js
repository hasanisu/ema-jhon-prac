import React from 'react';
import logo from '../../images/Logo.svg'
import './Header.css'

const Header = () => {
    return (
        <nav className=' header bg-hasan h-16 flex items-center justify-between px-7'>
           <img src={logo} alt=""></img>
           <div className=' text-white'>
                <a href="/order">Order</a>
                <a href="/order review">Order Review</a>
                <a href="/manage inventory">Manage Inventory</a>
                <a href="/login">Login</a>
           </div>
        </nav>
    );
};

export default Header;