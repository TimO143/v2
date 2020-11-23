import React from 'react';
import './Home.scss';

import Hero from "../../components/Hero"
import About from '../About'
import Projects from '../Projects'
import Contact from '../Contact'


function Home({element}) {
  return (
    <>
      <Hero/>
      <About element={element}/>
      <Projects/>
      <Contact/>
    </>   

  );
}

export default Home;