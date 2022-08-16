import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import {getAllCodeService} from "../../../services/userService";
import * as actions from "../../../store/actions";

class UserRedux extends Component {

    constructor(props) {
        super(props);
        this.state = {
            genderArr: [],
        }
    }

    async componentDidMount(prevProps, prevState, snapshot ) {
        // render => didupdate
        // present (this) and past (previous)
        //  [] [3]
        if (prevProps.genderRedux !==  this.props.genderRedux) {
            this.setState({
                genderArr: this.props.genderRedux 
            })
        }
        
        try {
            let res = await getAllCodeService('gender');
            if(res && res.errCode ===0) {
                this.setState({
                    genderArr: res.data
                })
            }
            console.log("check res", res);

        }catch(e) {
            console.log(e);
        }
    }


    render() {
        let genders = this.state.genderArr;
        console.log('check props from redux', this.props.genderRedux)
        return (
            <div className = "user-redux-container">
                <div className = 'title'>\
                    USER MANAGE
                </div>
                <div className = "user-redux-body">
                    <div className = "container">
                        <div className = "row">

                        </div><form>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                <label for="inputEmail">Email</label>
                                <input type="email" className="form-control" id="inputEmai" placeholder="Email"/>
                                </div>
                                <div className="form-group col-md-6">
                                <label for="inputPassword">Password</label>
                                <input type="password" className="form-control" id="inputPassword" placeholder="Password"/>
                                </div>
                            </div>
                            <div className="form-group">
                                <label for="inputAddress">Address</label>
                                <input type="text" className="form-control" id="inputAddress" placeholder="IU International"/>
                            </div>
                            <div className="form-group">
                                <label for="inputFirstName">First name</label>
                                <input type="text" className="form-control" id="inputFirstName" placeholder="Nguyen"/>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                <label for="inputLastName">Last Name</label>
                                <input type="text" className="form-control" id="inputLastName"/>
                                </div>
                                <div className="form-group col-md-4">
                                <label for="inputState">Gender</label>
                                {genders && genders.length > 0 && 
                                genders.map((item,idex) => {
                                    return (
                                        <select id="inputState" className="form-control">
                                    <option selected>Choose...</option>
                                    <option>...</option>
                                </select>
                                    )
                                })}
                                
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="gridCheck"/>
                                <label className="form-check-label" for="gridCheck">
                                    Check me out
                                </label>
                                </div>
                            </div>
                            <button type="submit" className="btn btn-primary">Sign in</button>
                            </form>
                    </div>
                </div>
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
        genderRedux: state.admin.genders,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getGenderStart: () => dispatch(actions.fetchGenderStart())
        // processLogout: () => dispatch(actions.processLogout()),

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserRedux);
