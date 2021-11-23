import React from 'react';
import { Link } from 'react-router-dom';

const Logo = () => {
    return (
        <div className="jp-logo">
            <Link to='/'><img src="./img/JP Consulting_jaune.png" alt="logo JP consulting" /></Link>     
        </div>
    );
};

export default Logo;