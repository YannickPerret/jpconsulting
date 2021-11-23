import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className="jp-navigation">
            <NavLink to="/" activeClassName="active">
                Accueil
            </NavLink>

            <NavLink to="#presentation" activeClassName="active" className="spaceBetween">
                Présentation
            </NavLink>

            <NavLink to="#prestation" activeClassName="active">
            Nos services
            </NavLink>

            <NavLink to="#nous-contacter" activeClassName="active">
                Contact
            </NavLink>
        </div>
       
    );
};

export default Navigation;