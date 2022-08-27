import React from 'react'

import { About, Footer, Header, Skills, Testimonial, Work } from './container';
import { Navbar } from './components';
import './App.scss';

const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <About />
      <div className="app__graybg"><Work /></div>
      <Skills />
      <div className="app__graybg"><Testimonial /></div>
      <Footer />
    </div>
  )
}

export default App