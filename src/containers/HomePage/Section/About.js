import React, { Component } from 'react';
import { connect } from 'react-redux';
import "./About.scss";
import { FormattedMessage } from 'react-intl';
import Slider from 'react-slick';
import * as actions from '../../../store/actions'
import { Redirect } from 'react-router-dom';
import { withRouter } from 'react-router';



class About extends Component {

    componentDidMount() {

    }

    render() {

        return (
            <div className='section-share section-about'>
                <div className='section-about-header'>
                    Social Media
                </div>
                <div className='section-about-content'>
                    <div className='content-left'>
                    <iframe width="100%" height="400px" 
                    src="https://www.youtube.com/embed/91Kij1RJqGc" title="YouTube video player" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    <div className='content-right'>
                        <div className='right-container'>
                            <div className='contact'>
                                CONTACT US
                            </div>
                            <div className='content-about'>
                                <p>
                                International University - VietNam National University HCM City
                                </p>
                                <p>
                                Address: Quarter 6, Linh Trung Ward, Thu Duc City, Ho Chi Minh City
                                </p>
                                <div className='social-content'>
                                <p>
                                    <i class="fa fa-phone"></i>
                                    Phone: (028) 37244270
                                </p>
                                <p>
                                    <i class="fa fa-fax"></i>
                                    Fax: (028) 37244271 
                                </p>
                                <p>
                                <i class="fa fa-envelope-o"></i>
                                    Email: <a href="mailto:info@hcmiu.edu.vn">info@hcmiu.edu.vn</a>
                                </p>
                                </div>
                            </div>
                        </div>
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(About));
