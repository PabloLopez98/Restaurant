import React from 'react';
import './Experience.scss';
import { motion } from 'framer-motion';
import imgOne from '../Images/iconic.jpg';
import imgTwo from '../Images/boattwo.jpg';
import imgThree from '../Images/outside.jpg';
import imgFour from '../Images/chef.jpg';
import imgFive from '../Images/people.jpg';
import imgSix from '../Images/inside.jpg';
import ReactPlayer from 'react-player';
import myVideo from '../Videos/video.mp4';
import myVideoTwo from '../Videos/lastvideo.mp4';

function Experience() {
    return (
        <div className="experience-container">
            <div className="top">
                <div className="first"><img src={imgOne} /></div>
                <div className="second">
                    <ReactPlayer
                        className="react-player"
                        url={myVideo}
                        muted='true'
                        volume='0'
                        //playing='true'
                        loop='true'
                    />
                </div>
                <div className="third"><img src={imgTwo} /></div>
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
                    <ReactPlayer
                        className="react-player"
                        url={myVideoTwo}
                        muted='true'
                        volume='0'
                        //playing='true'
                        loop='true'
                    />
                </div>
                <div className="right"><img src={imgThree} /></div>
            </div>
            <div className="bottom">
                <div className="first"><img src={imgFour} /></div>
                <div className="second"><img src={imgFive} /></div>
                <div className="third"><img src={imgSix} /></div>
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
