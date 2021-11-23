import React from 'react';
import Data from '../Helpers/data.json'
import Cards from './Cards';

const Service = () => {



    return (
        <div className="service-container">
            <h2 className="service-container-title">Découvrez nos services</h2>

            <section className="service-article">
                    {Data.Services
                    .sort((a, b) => b.id - a.id)
                    .map((service) => (
                        <Cards service={service} />
                    ))}
            </section>

            <section className="service-show">
                <article>
                        ICI LES EXPLICATIONS DES CARDS
                </article>
            </section>
        </div>
    );
};

export default Service;