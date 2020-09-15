import React from 'react';
import './Home.scss';
import { ExitFeature, motion } from 'framer-motion';

function Home() {

    const variants = {
        initial: { x: -1000, opacity: 0 },
        animate: { x: 0, opacity: 1 },
        initialSocial: { x: 500, opacity: 0 },
        animateSocial: { x: 0, opacity: 1 },
        whileHover: {
            color: "white",
            scale: 1.2,
            transition: {
                duration: 0.4,
            }
        }
    }

    return (
        <div className='home-container'>
            <div className="name-button-container">
                <motion.span
                    initial="initial"
                    animate="animate"
                    transition={{ duration: 2.5 }}
                    variants={variants}
                    className="name"> Lorenzo's Italian<br />Restaurant <span style={{ color: "goldenrod" }}>.</span></motion.span>
                <motion.span
                    initial="initial"
                    animate="animate"
                    transition={{ duration: 3 }}
                    whileHover="whileHover"
                    variants={variants}
                    className="button">Download Menu</motion.span>
            </div>
            <motion.div
                initial="initialSocial"
                animate="animateSocial"
                transition={{ duration: 3 }}
                variants={variants}
                className="social-medias-container">
                <ul>
                    <li><i class="fab fa-snapchat"></i></li>
                    <li><i class="fab fa-instagram"></i></li>
                    <li><i class="fab fa-twitter"></i></li>
                    <li><i class="fab fa-youtube"></i></li>
                </ul>
            </motion.div>
        </div>
    );
}

export default Home;
