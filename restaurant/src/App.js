import React from 'react';
import * as Scroll from 'react-scroll';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import Home from './components/Home';
import Experience from './components/Experience';
import Gallery from './components/Gallery';
import Menu from './components/Menu';
import Story from './components/Story';
import Contact from './components/Contact';
import { motion } from 'framer-motion';
import ReactPlayer from 'react-player';
import myVideo from './Videos/thevid.mp4';
import './App.scss';

function App() {
  const variants = {
    initial: { x: -1000, opacity: 0 },
    animate: { x: 0, opacity: 1 },
  }
  return (
    <div className="App">
      <ReactPlayer
        className="react-player"
        url={myVideo}
        muted='true'
        volume='0'
        playing='true'
        loop='true'
        width='100%'
        height='auto'
      />
      <div className="overlay"></div>
      <div className="themenu-container">
        <div className="themenu">
          <motion.ul
            initial="initial"
            animate="animate"
            transition={{ duration: 2 }}
            variants={variants}
          >
            <li><i class="fas fa-pizza-slice"></i></li>
            <li><Link to="home" offset={0} spy={true} activeClass="active" smooth={true} duration={1000}>Home</Link></li>
            <li><Link to="experience" offset={0} spy={true} activeClass="active" smooth={true} duration={1000}>Experience</Link></li>
            <li><Link to="gallery" offset={0} spy={true} activeClass="active" smooth={true} duration={1000}>Gallery</Link></li>
            <li><Link to="menu" offset={0} spy={true} activeClass="active" smooth={true} duration={1000}>Menu</Link></li>
            <li><Link to="story" offset={0} spy={true} activeClass="active" smooth={true} duration={1000}>Story</Link></li>
            <li><Link to="contact" offset={0} spy={true} activeClass="active" smooth={true} duration={1000}>Contact</Link></li>
          </motion.ul>
        </div>
      </div>
      <div className="home">
        <Home />
      </div>
      <div className="experience">
        <Experience />
      </div>
      <div className="gallery">
        <Gallery />
      </div>
      <div className="menu">
        <Menu />
      </div>
      <div className="story">
        <Story />
      </div>
      <div className="contact">
        <Contact />
      </div>
    </div>
  );
}

export default App;
