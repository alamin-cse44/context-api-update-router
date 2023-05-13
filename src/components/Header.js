import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav style={{ display:'flex', gap:'10px', justifyContent:'center' }}>
            <Link to='/'>Home</Link>
            <Link to='/orders'>Orders</Link>
        </nav>
    );
};

export default Header;