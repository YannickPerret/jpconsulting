import React from 'react';

const Cards = ({service}) => {
    return (
    <article className="Cards" id={service.id}>
        <img src={'./img/services/'+service.image} alt={service.title} />
        <span className="banderolle"> 
            <h3 >{service.title}</h3>
            <p>{service.content}</p>
        </span>
    </article>

    );
};

export default Cards;