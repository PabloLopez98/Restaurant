import React from 'react';
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
    initial: { y: -1000, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  }

  return (
    <div className="App">
      {/* 
        react-player, overlay, themenu-container

        z-index: -2, -1, ,3
      
      */}

      <ReactPlayer
        className="react-player"
        playing='true'
        loop='true'
        url={myVideo}
        width='100%'
        height='auto%'
      />
      <div className="overlay"></div>
      <motion.div
        initial="initial"
        animate="animate"
        transition={{ duration: 1 }}
        variants={variants}
        className="themenu-container">
        <div className="themenu">
          <ul>
            <li><i class="fas fa-pizza-slice"></i></li>
            <li>Home</li>
            <li>Experience</li>
            <li>Gallery</li>
            <li>Menu</li>
            <li>Story</li>
            <li>Contact</li>
          </ul>
        </div>
      </motion.div>
      {/* 
        Rest of containers

        z-index: 0
      
      */}
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
