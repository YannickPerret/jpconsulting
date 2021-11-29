import React from 'react';

const Cards = (props) => {
    
    const handleClick  = () => {
        props.onSelectedService(props.service);
    }

    return (
    <article className={props.isOpen ? "Cards-Mini" : "cards"} onClick={handleClick}>
        <img src={'./img/services/'+props.service.image} alt={props.service.title}/>
        <div className="banderolle"> 
            <h3>{props.service.title}</h3>
            {props.isOpen === false && <em>{props.service.contentMin}</em>}
            {props.isOpen === false &&  <p>En savoir plus</p>}
        </div>
    </article>
    );
};

export default Cards;