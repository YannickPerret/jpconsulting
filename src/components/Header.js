import React from 'react';
import Logo from './Logo';
import Navigation from './Navigation';
import Slider from './Slider';

const Header = () => {
    return (
        <div>
            <nav className="jp-header-content">
                <Navigation />
                <Logo />
            </nav>
            <Slider />
        </div>
    );
};

export default Header;