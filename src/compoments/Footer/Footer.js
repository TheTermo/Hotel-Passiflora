import "./Footer.scss"
import {Link} from "react-router-dom";
import React from "react";

const Footer = () => {
    return (
        <div className="footer">
            <div className="top">
                <div>
                    <h1>Hotel Passiflora</h1>
                </div>
                <div>
                    <i className="fa-brands fa-facebook-square"></i>
                    <i className="fa-brands fa-instagram-square"></i>
                    <i className="fa-brands fa-twitter-square"></i>
                    <i className="fa-brands fa-behance-square"></i>
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