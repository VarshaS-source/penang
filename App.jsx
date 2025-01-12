import React from 'react';
import Navigation from './components/Navigation';
import MainContent from './components/MainContent';
import TouristSpot from './components/TouristSpot';
import Hotel from './components/Hotel';
import Food from './components/Food';
import Adventure from './components/Adventure';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="app">
      <Navigation />

      <div className="content">
        <div className="main-content">
          <MainContent />
        </div>

        <section id="tourist-spot">
          <TouristSpot />
        </section>

        <section id="food">
          <Food />
        </section>

        <section id="hotel">
          <Hotel/>
        </section>

        <section id="adventure">
          <Adventure/>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default App;


