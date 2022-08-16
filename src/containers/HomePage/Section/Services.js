import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Travel.scss'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Services.scss";
import serviceImg1 from "../../../assets/servicesimg/serv1.jpg";
import serviceImg2 from "../../../assets/servicesimg/serv2.jpg";
import serviceImg3 from "../../../assets/servicesimg/serv3.jpg";
import serviceImg4 from "../../../assets/servicesimg/serv4.jpg";
import serviceImg5 from "../../../assets/servicesimg/serv5.jpg";
import serviceImg6 from "../../../assets/servicesimg/serv6.jpg";
import serviceImg7 from "../../../assets/servicesimg/serv7.jpg";
import serviceImg8 from "../../../assets/servicesimg/serv8.jpg";

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "red" }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "green" }}
        onClick={onClick}
      />
    );
  }

class Services extends Component {

    
    render() {
        let settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 2,
          };
        return (
            
            <div className = "section-share service-section">
                <div className = "service-container">
                    <div className = "service-header">
                       <span className = "title-section">
                         Our services
                        </span> 
                    </div>
                <div className = "service-body">
                    <Slider {...settings}>
                
                <div className = "service-customize">
                        <div className = "bg-image1" />
                </div>
                
                <div className = "service-customize">
                     <div className = "bg-image2" />
                </div>
                <div className = "service-customize">
                     <div className = "bg-image3" />
                </div>
                <div className = "service-customize">
                     <div className = "bg-image4" />
                </div>
                <div className = "service-customize">
                     <div className = "bg-image5" />
                </div>
                <div className = "service-customize">
                    <div className = "bg-image6" />
                </div>
                <div className = "service-customize">
                    <div className = "bg-image7" />
                </div>
                <div className = "service-customize">
                    <div className = "bg-image8" />
                </div>
                     </Slider>

                </div>
                </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Services);
