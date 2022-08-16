import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Travel.scss'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import travelImg1 from "../../../assets/travelImg/travel1.jpg"
import travelImg2 from "../../../assets/travelImg/travel2.jpg"
import travelImg3 from "../../../assets/travelImg/travel3.jpg"
import travelImg4 from "../../../assets/travelImg/travel4.jpg"
import travelImg5 from "../../../assets/travelImg/travel5.jpg"
import travelImg6 from "../../../assets/travelImg/travel6.jpg"

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

class Travel extends Component {

    
    render() {
        let settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 2,
          };
        return (
            
            <div className = "section-share travel-section">
                <div className = "travel-container">
                    <div className = "travel-header">
                       <span className = "title-section">
                         Our travel
                        </span> 
                    </div>
                <div className = "travel-body">
                    <Slider {...settings}>
                
                <div className = "travel-customize">
                        <div className = "bg-image1" />
                </div>
                
                <div className = "travel-customize">
                     <div className = "bg-image2" />
                </div>
                <div className = "travel-customize">
                     <div className = "bg-image3" />
                </div>
                <div className = "travel-customize">
                     <div className = "bg-image4" />
                </div>
                <div className = "travel-customize">
                     <div className = "bg-image5" />
                </div>
                <div className = "travel-customize">
                    <div className = "bg-image6" />
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

export default connect(mapStateToProps, mapDispatchToProps)(Travel);
