import React  from 'react';
import './App.css'

import Header from './Header';
import About from './About';
import Skills from './Skills';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Footer from './Footer';
import NavBar from './NavBar';



function App() {
  


  
  return (
    <React.Fragment>
      <NavBar/>
      <Header/>
      <About/>
      <Skills/>
      <Portfolio/>
      <Contact/>
      <Footer/>
    </React.Fragment>
  );
}

export default App;