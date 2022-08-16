import React, { Component } from 'react';
import { connect } from 'react-redux';
import HomeHeader from './HomeHeader';
import Travel from './Section/Travel';
import Station from './Section/Station';
import Services from './Section/Services';
import About from './Section/About';
import HomeFooter from './HomeFooter';
import "./Homepage.scss";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

class HomePage extends Component {

    render() {
        let settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 2,
          };

        return (
           <div>
               <HomeHeader isShowBanner = {true}/>
               <Travel/>
               <Station settings = {settings} />
               <Services />
               <About />
               <HomeFooter />
           </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
