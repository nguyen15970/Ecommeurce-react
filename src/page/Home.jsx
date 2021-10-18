import React from 'react';
import Slider from 'react-slick';
import Averte from '../components/Averte/averte';
import TopBander from '../components/Banner/TopBander';
import Brands from '../components/Brands/Brands';
import Footer from '../components/Footer/Footer';
// import Announcement from '../components/Header/Announcement';
import Navbar from '../components/Header/Navbar';
import '../components/Header/navbar.css'
import Featured from '../components/Product/featured';
import Banner from '../components/ProductBanner/banner';
import Testimonial from '../components/testimonial/testimonial';


function Home(props) {
    return (
        <body className='home'>
            <Navbar></Navbar>
            <Slider></Slider>
            <TopBander/>
            {/* <Averte/> */}
            <Averte/>
            <Featured/>
            <Banner/>
            <Testimonial/>
            <Brands></Brands>
            <Footer/>
        </body>
    );
}

export default Home;