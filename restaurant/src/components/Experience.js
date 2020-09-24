import React, { useState, useEffect } from 'react';
import './Experience.scss';
import { motion, useAnimation } from 'framer-motion';
import imgOne from '../ImagesA/iconic.jpg';
import imgTwo from '../ImagesA/boattwo.jpg';
import imgThree from '../ImagesA/outside.jpg';
import imgFour from '../ImagesA/chef.jpg';
import imgFive from '../ImagesA/people.jpg';
import imgSix from '../ImagesA/inside.jpg';
import ReactPlayer from 'react-player';
import myVideo from '../Videos/video.mp4';
import myVideoTwo from '../Videos/lastvideo.mp4';

function Experience() {

    const controls = useAnimation();

    const [scrollPosition, setScrollPosition] = useState(0);

    const handleScroll = () => {
        const position = window.pageYOffset;
        if (position < scrollPosition) {
            controls.start({
                y: 0,
                transition: { duration: 1 },
            })
        } else {
            controls.start({
                y: 15,
                transition: { duration: 1 },
            })
        }
        setScrollPosition(position);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    });

    return (
        <div className="experience-container">
            <div className="top">
                <div className="first">
                    <motion.img animate={controls} src={imgOne} />
                </div>
                <div className="second">
                    <ReactPlayer
                        className="react-player"
                        url={myVideo}
                        muted={true}
                        volume={0}
                        playing={true}
                        loop={true}
                    />
                </div>
                <div className="third">
                    <motion.img animate={controls} src={imgTwo} />
                </div>
                <span className="text">
                    Florence is just right in so many ways.
                    The city is just the right size to make it one of the most walkable cities in Italy.
                    This city is the rightful birthplace of the Renaissance and is loaded with wonderful art, architecture, and some of the finest museums in the world, the Uffizi and the Galleria dell’ Accademia.
                    Florence truly is of the most beautiful cities in the world.
                    Tour the city and enjoy the scenery while rounding off the trip with a visit to Lorenzo's.
                </span>
            </div>
            <div className="middle">
                <div className="left">

                    {window.innerWidth < 900 ?

                        (<ReactPlayer
                            width='90%'
                            height='auto'
                            className="react-player"
                            url={myVideoTwo}
                            muted={true}
                            volume={0}
                            playing={true}
                            loop={true}
                        />) : (
                            <ReactPlayer
                                className="react-player"
                                url={myVideoTwo}
                                muted={true}
                                volume={0}
                                playing={true}
                                loop={true}
                            />
                        )

                    }

                </div>
                <div className="right">
                    <motion.img animate={controls} src={imgThree} />
                </div>
            </div>
            <div className="bottom">
                <div className="first">
                    <motion.img animate={controls} src={imgFour} />
                </div>
                <div className="second">
                    <motion.img animate={controls} src={imgFive} />
                </div>
                <div className="third">
                    <motion.img animate={controls} src={imgSix} />
                </div>
                <span className="text">
                    Florence is just right in so many ways.
                    The city is just the right size to make it one of the most walkable cities in Italy.
                    This city is the rightful birthplace of the Renaissance and is loaded with wonderful art, architecture, and some of the finest museums in the world, the Uffizi and the Galleria dell’ Accademia.
                    Florence truly is of the most beautiful cities in the world.
                    Tour the city and enjoy the scenery while rounding off the trip with a visit to Lorenzo's.
                </span>
            </div>
            <span className="title">Experience<span style={{ color: "goldenrod" }}>.</span></span>
        </div>
    )
}

export default Experience;
