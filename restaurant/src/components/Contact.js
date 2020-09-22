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
                    <span>Directions there.</span>
                </div>
                <div className="right">
                    <img src={lastImg} />
                </div>
            </div>
        </div>
    )
}

export default Contact;
