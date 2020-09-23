import React from 'react';
import './Contact.scss';
import { motion } from 'framer-motion';
import lastImg from '../ImagesA/contactoutside.jpg';

function Contact() {
    return (
        <div className="contact-container">
            <span className="title">Contact<span style={{ color: "goldenrod" }}>.</span></span>
            <div className="grid-container">
                <div className="left">
                    <span>Open Tuesday to Saturday from 1pm to 11pm.<br />Closed on Sunday and Monday.</span>
                    <span>(123) 900 4256 info@lorenzos.com</span>
                    <span>Piazza della Signoria, 1 - Firenze - ITALY</span>
                    <a href="https://www.google.com/maps/dir//Florence,+Metropolitan+City+of+Florence,+Italy/@43.7799368,11.1709293,12z/data=!4m9!4m8!1m0!1m5!1m1!1s0x132a56a680d2d6ad:0x93d57917efc72a03!2m2!1d11.2558136!2d43.7695604!3e0"
                        target="_blank">Directions there.</a>
                </div>
                <div className="right">
                    <img src={lastImg} />
                </div>
            </div>
        </div>
    )
}

export default Contact;
