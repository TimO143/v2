import React from 'react';
import './Home.scss';

import Hero from "../../components/Hero"
import About from '../About'
import Projects from '../Projects'
import Contact from '../Contact'
import ArtProjects from '../ArtProjects';
// import Footer from '../../components/Footer';


function Home({element}) {
  return (
    <>
      <Hero/>
      <About element={element}/>
      <Projects/>
      <ArtProjects/>
      <Contact/>
    </>   

  );
}

export default Home;