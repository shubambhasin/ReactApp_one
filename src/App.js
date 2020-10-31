import React from 'react';

import Navbar from "./Navbar";
import MasterHead from "./MasterHead";
import Portfolio from "./Portfolio";
import AboutSection from "./AboutSection";
import Contact from "./Contact";
import Footer from "./Footer";
import Copyright from "./Copyright";


const App = () => {
  return(
    <div>
      <h1>Hello world !!!!!</h1>
      <Navbar/>
      <MasterHead/>
      <Portfolio/>
      <AboutSection/>
      <Contact/>
      <Footer/>
      <Copyright/>
    </div>
  )
}

export default App;