import React, { Component } from 'react';
import { connect } from 'react-redux';
import './HomeHeader.scss'

class HomeHeader extends Component {

    render() {

        return (
            <React.Fragment>
                <div className = "home-header-container">
                    <div className = "home-header-content">
                        <div className = "left-content">
                                {/* <i className = "fas fa-bars"></i> */}
                                <div className = "header-logo">

                                </div>
                        </div>
                        <div className = "center-content">
                                RAILWAY SYSTEM
                        </div>
                        <div className = "right-content">
                                <div className = "home-header-support">
                                    <i className = "fas fa-question-circle help-logo"></i>
                                    Need help?
                                </div>
                                <div className = "language-vi">VN</div>
                                <div className = "language-en">EN</div>
                        </div>
                    </div>
                </div>
                {this.props.isShowBanner === true &&
                <div className = "home-header-banner">
                        <div className = "content-up">
                        <div className = "title1">The Best transportation of all time</div>
                        <div className = "title2">More friendly than your bike </div>
                        {/* <div className = "search">
                            <i className = "fas fa-search"></i>
                            <input type = "text" placeholder = "Search your destination" />
                        </div> */}
                    </div>
                    <div className = "content-down">
                    <div className = "option">
                        <div className = "option-child">
                            <div className = "icon-child">
                            <i class="fas fa-train"></i>
                            </div>
                            <div className = "text-child">Sai Gon</div>
                        </div>
                        <div className = "option-child">
                            <div className = "icon-child">
                            <i class="fas fa-train"></i>
                            </div>
                            <div className = "text-child">Bien Hoa</div>
                        </div>
                        <div className = "option-child">
                            <div className = "icon-child">
                            <i class="fas fa-train"></i>
                            </div>
                            <div className = "text-child">Hai Phong</div>
                        </div>
                        <div className = "option-child">
                            <div className = "icon-child">
                            <i class="fas fa-train"></i>
                            </div>
                            <div className = "text-child">Ha Noi</div>
                        </div>
                    </div>
                    </div>
                </div>
    }
            </React.Fragment>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeHeader);
