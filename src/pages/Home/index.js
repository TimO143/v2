import React from 'react';
import './Home.scss';

import Hero from "../../components/Hero"
import About from '../About'
import Skills from '../Skills'
import Projects from '../Projects'
import Contact from '../Contact'
import Featured from '../Featured'


function Home() {
  return (
    <>
      <Hero/>
      <About/>
      <Skills/>
      <Featured/>
      <Projects/>
      <Contact/>
    </>   

  );
}

export default Home;
