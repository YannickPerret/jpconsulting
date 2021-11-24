import React from 'react';
import GoogleMapReact from 'google-map-react';

const Contact = () => {
    const coords = {
        center: {
          lat: 46.781472,
          lng: 6.639709
        },
        zoom: 13.5
      };
    return (
    
        <div className="jp-contact">
            <div className="contact-container">

                <div className="contact-title">
                    <h2> Prendre contact avec moi </h2>
                </div>
                <div className="contact-subtitle">
                <p>
                    Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce porta tortor lectus, at ornare nisi ultrices in. Etiam ultrices viverra mauris, quis ultricies mauris placerat congue. Duis urna odio, commodo semper maximus in, bibendum sit amet turpis. In hac habitasse platea dictumst. Pellentesque at congue ligula. Cras placerat magna a elit laoreet auctor. Fusce id magna et magna viverra interdum id eu dui. In molestie ligula sollicitudin viverra ultricies. Nulla facilisi.
                </p>
                </div>

                <div className="contact-method">
                    <img src="./img/contact/call.png" alt="Logo cliquable pour appeler JP consulting" />
                    <img src="./img/contact/email.png" alt="Logo cliquable pour nous contacter par email" />
                    <img src="./img/contact/facebook.png" alt="Logo cliquable pour nous contacter par facebook" />
                </div>

                <div className="contact-content">
                    <div className="contact-map">
                        <GoogleMapReact
                            bootstrapURLKeys={{key: "AIzaSyDKkTZ59yueq57Ltrflg0R9Gxxz7xcVoKk" }}
                            defaultCenter={coords.center}
                            defaultZoom={coords.zoom}>
                        </GoogleMapReact>

                    </div>
                    <div className="contact-form">
                        <h3> Formulaire de contact </h3>
                        <form>
                            <label htmlfor="name">Votre nom / prénom *</label>
                            <input type="text" placeholder="Nom et prénom" />

                            <label htmlfor="email">Votre email *</label>
                            <input type="email" placeholder="exemple@jpconsulting.ch" />

                            <label htmlfor="phone">Votre numéro de téléphone </label>
                            <input type="number" placeholder="41 079 452 15 62" />

                            <label htmlfor="message">Votre message *</label>
                            <textarea placeholder="Votre message" rows={10} cols={50}></textarea>

                            <input type="button" value="Envoyer ma demande" />
                            <input type="button" value="Annuler" />
                        </form>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Contact;