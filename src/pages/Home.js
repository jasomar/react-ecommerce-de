import React from 'react'
import Announcement from '../components/Announcement.js';
import Categories from '../components/Categories.js';
import Navbar from '../components/Navbar.js';
import Slider from '../components/Slider.js';
import Products from '../components/Products.js';
import Newsletter from '../components/Newsletter.js';
import Footer from '../components/Footer.js';

const Home = () => {
  return (
    <div>
        <Announcement></Announcement>
        <Navbar></Navbar>
        <Slider></Slider>
        <Categories></Categories>
        <Products/>
        <Newsletter/>
        <Footer/>
    </div>
  )
}

export default Home


