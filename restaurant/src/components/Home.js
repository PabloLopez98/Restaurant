import React from 'react';
import './Home.scss';
import { ExitFeature, motion } from 'framer-motion';

function Home() {

    const variants = {
        initial: { x: -1000, opacity: 0 },
        animate: { x: 0, opacity: 1 },
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
        </div>
    );
}

export default Home;
