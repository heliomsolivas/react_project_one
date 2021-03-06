import React, { Component } from 'react';
import './resources/styles.css';

import { Element } from 'react-scroll';

import Header from './components/header_footer/Header'
import Featured from './components/featured/index'
import VenueInfo from './components/venue_info/index'
import Hightlights from './components/highlights/index'
import Pricing from './components/pricing/index'
import Location from './components/location/index'
import Footer from './components/header_footer/Footer'

class App extends Component {
  render() {
    return (
      <div className="App" style={{ height: "1500px", background:'cornflowerblue'}}>
        <Header/>
        <Element name="featured">
          <Featured/>
        </Element>
        <Element name="venue_info">
          <VenueInfo/>
        </Element>
        <Element name="highlights">
          <Hightlights/>
        </Element>
        <Element name="pricing">
          <Pricing/>
        </Element>
        <Element name="location">
          <Location/>
        </Element>
        <Footer/>
      </div>
    );
  }
}

export default App;