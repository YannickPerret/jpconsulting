import React from "react";
const Slider = () => {

    return (
        <div className="slider">
            <div className="slider--content">
                <div className="slider--feature">
                    <h1 className="feature--title">Un projet en vue ?</h1>
                    <p className="feature--text">Offrez vous le meilleur et à votre projet le meilleur ! Nos spécialistes sont là pour répondre à vos besoins</p>
                    <button className="slider-button">Découvrez nos prestations</button>
                </div>
            </div>
            <div className="cover-mouse">
                <svg width="20" height="30" viewBox="0 0 20 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 9V14.0909" stroke="white" stroke-linecap="round" stroke-linejoin="round"></path>
                    <path d="M19 9.90909C19 4.98874 14.9706 1 10 1C5.02944 1 1 4.98874 1 9.90909V20.0909C1 25.0113 5.02944 29 10 29C14.9706 29 19 25.0113 19 20.0909V9.90909Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
                <span>Scroll pour découvrir</span>  
            </div>
            
        </div>
    );
};

export default Slider;