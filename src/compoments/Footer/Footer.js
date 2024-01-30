import "./Footer.scss"
import {Link} from "react-router-dom";
import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faFacebookSquare, faInstagramSquare, faTwitterSquare, faBehanceSquare} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <div className="footer">
            <div className="top">
                <div>
                    <h1>Hotel Passiflora</h1>
                </div>
                <div>
                    <FontAwesomeIcon icon={faFacebookSquare} className="icons"/>
                    <FontAwesomeIcon icon={faInstagramSquare} className="icons"/>
                    <FontAwesomeIcon icon={faTwitterSquare} className="icons"/>
                    <FontAwesomeIcon icon={faBehanceSquare} className="icons"/>
                </div>
            </div>

            <div className="bottom">
                <Link to="/" className="link">Strona Główna</Link>
                <Link to="/rezerwacje" className="link">Rezerwacje</Link>
                <Link to="/galeria" className="link">Galeria</Link>
                <Link to="/kontakt" className="link">Kontakt</Link>
            </div>
        </div>
    )
};
export default Footer;