import React from 'react';

const Cards = (props) => {
    
    const handleClick  = () => {
        props.onSelectedService(props.service);
    }

    return (
    <article className={props.isOpen ? "Cards-Mini" : "cards"} onClick={handleClick}>
        <img src={'./img/services/'+props.service.image} alt={props.service.title}/>
        
    </article>
    );
};

export default Cards;