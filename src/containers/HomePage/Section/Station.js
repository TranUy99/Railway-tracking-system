import React, { Component } from 'react';
import { connect } from 'react-redux';
import "./Station.scss";
import { FormattedMessage } from 'react-intl';
import Slider from 'react-slick';
import * as actions from '../../../store/actions'
import { Redirect } from 'react-router-dom';
import { withRouter } from 'react-router';
import stationImg1 from "../../../assets/stationimg/station1.jpg"
import stationImg2 from "../../../assets/stationimg/station2.jpg"
import stationImg3 from "../../../assets/stationimg/station3.jpg"
import stationImg4 from "../../../assets/stationimg/station4.jpg"


class Station extends Component {


    HandleViewTrainDetail = (station) => {
        console.log("detail is: ", station );
        this.props.history.push(`/station-detail/`)
        return <Redirect to = "/user" push={true} />
    }

    HandleViewTrainDetail1 = (station) => {
        console.log("detail is: ", station );
        this.props.history.push(`/station-detail1/`)
        return <Redirect to = "/user" push={true} />
    }

    componentDidMount() {

    }

    render() {

        return (
            <div className = "section-share station-section ">
                <div className = "station-container">
                    <div className = "station-header">
                       <span className = "title-section">
                         Our Station
                        </span> 
                    </div>
                <div className = "section-body">
                    <Slider {...this.props.settings}>
                
                <div className = "station-customize" onClick ={(item) => this.HandleViewTrainDetail(item)}>
                        <div className = "bg-image1 station-img" />
                        <div className = "position text-center">
                        <div>Sai Gon Station </div>
                        
                        </div>

                </div>
                
                <div className = "station-customize" onClick ={(item) => this.HandleViewTrainDetail1(item)}>
                     <div className = "bg-image2 station-img" />
                     <div className = "position text-center">
                        <div>Bien Hoa Station </div>
                        
                        </div>
                </div>
                <div className = "station-customize" onClick ={(item) => this.HandleViewTrainDetail(item)}>
                     <div className = "bg-image3 station-img" />
                     <div className = "position text-center">
                        <div>Hai Phong Station </div>
                        
                        </div>
                </div>
                <div className = "station-customize" onClick ={(item) => this.HandleViewTrainDetail(item)}>
                     <div className = "bg-image4 station-img" />
                     <div className = "position text-center">
                        <div>Ha Noi Station </div>
                        
                        </div>

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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Station));
