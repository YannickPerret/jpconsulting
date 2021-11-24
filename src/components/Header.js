import React from 'react';
import Logo from './Logo';
import Navigation from './Navigation';
import Slider from './Slider';

const Header = () => {
    return (
        <>
            <nav className="jp-header-content">
                <Navigation />
                <Logo />
            </nav>
            <Slider />
        </>
    );
};

export default Header;