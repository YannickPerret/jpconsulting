import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className="jp-navigation">
            <NavLink to="/">
                Accueil
            </NavLink>

            <NavLink to="#presentation"  className="spaceBetween">
                Présentation
            </NavLink>

            <NavLink to="#prestation" >
            Nos services
            </NavLink>

            <NavLink to="#nous-contacter" >
                Contact
            </NavLink>
        </div>
       
    );
};

export default Navigation;