import React, { useState } from 'react';
import Data from '../Helpers/data.json'
import Cards from './Cards';

const Service = () => {
    const [serviceIsOpen, setServiceIsopen] = useState(false);
    const [serviceChoise , setServiceChoise] = useState([]);


    const changeService = (serviceId) =>{
        setServiceChoise(serviceId);
        setServiceIsopen(true);
     }

    return (
        <div className="jp-services" >
            <div className="container" >
                <div className="body-title">
                    <h2>Découvrez nos services</h2>
                </div>
                
                {serviceIsOpen && 
                <>
                <div className="btn-container"><button onClick={(() => {setServiceIsopen(false)})} >{"< Revenir à la liste >"}</button></div>
                <section className="service-show">
                    <header className="show-header"> 
                        <img src={"./img/services/"+serviceChoise.image} alt={"Image en cover de la prestation "+serviceChoise.title}/>
                        <h3>{serviceChoise.title}</h3>
                    </header>
                    <article className="show-body">
                        {serviceChoise.content}
                    
                        
                        
                    </article>
                </section>
                </>}


                <section className="service-article">
                        {Data.Services
                        .sort((a, b) => a.id - b.id)
                        .map((service) => (
                            serviceIsOpen && serviceChoise.id === service.id ?
                                null :
                            <Cards 
                            key={service.id}
                            service={service}
                            isOpen = {serviceIsOpen} 
                            onSelectedService={changeService}/>
                        ))}
                </section>
            </div>
            
            
        </div>
    );
};

export default Service;