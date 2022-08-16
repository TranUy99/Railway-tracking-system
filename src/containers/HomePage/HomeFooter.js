import React, { Component } from 'react';
import { connect } from 'react-redux';
import "./HomeFooter.scss";
import { FormattedMessage } from 'react-intl';

class HomeFooter extends Component {

    render() {

        return (
            
            <div className = "home-footer">
                <p>&copy; 2021 From Group 11. More information, please contact us
                    <a target = "_blank" href="https://www.facebook.com/"> 
                    &#8594; Click
                    </a>
                </p>
                
            </div>
        )
            
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

export default connect(mapStateToProps, mapDispatchToProps)(HomeFooter);
