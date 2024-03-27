import React from 'react';
import logo from '../../images/Logo.svg';
import './Header.css'

const Header = () => {
    return (
        <nav className='hader'>
            <img src={logo} alt="" />
            <div>
            <a href="#sdafa">Order</a>
            <a href="#sdfw">Order Review</a>
            <a href="#araw">Manage Enventory</a>
            <a href="#awrtwa"> login</a>
            </div>

        </nav>
    )
};

export default Header;