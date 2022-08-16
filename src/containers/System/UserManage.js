import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import './UserManage.scss';
import {getAllUsers} from '../../services/userService';
class UserManage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            arrUsers: []
        }
    }

    // async componentDidMount() {
    //     let response = await getAllUsers('All');
    //     if(response && response.errCode ===0) {
    //         this.setState({
    //             arrUsers: response.users
    //         }) 
    //     }
    // }

    handleAddNewUser = () => {

    }


    render() {
        let arrUsers = this.state.arrUsers;
        return (
            <div className="users-container">
                <div className = "title text-center">
                    Manage user
                </div>
                <div className = "mt-1">
                    <button className = "btn btn-primary px-3"
                    >
                        Add new users
                    <i className = "fas fa-plus"></i>
                    </button>
                </div>
                <div className = "users-table mt-3 mx-1">
                <table id="customers">
                <tr>
                    <th>Email</th>
                    <th>First name</th>
                    <th>Last name</th>
                    <th>Address</th>
                    <th>Actions</th>
                </tr>
                <tr>
      {
          arrUsers && arrUsers.map((item, index) => {
              console.log('check map', item, index);
              return (
                <tr>
                    <td>{item.email}</td>
                    <td>{item.fisrtName}</td>
                    <td>{item.lastname}</td>
                    <td>{item.address}</td>
                    <td>
                        <button className = "btn-edit">
                            <i className = "fas fa-pencil-alt">
                                </i>
                        </button>
                        <button 
                        className = "btn-delete">
                            <i className = "fas fa=trash"></i>
                        </button>
                    </td>
                </tr>               
              )
          })
      }
    <td>Alfreds Futterkiste</td>
    <td>Maria Anders</td>
    <td>Germany</td>
  </tr>
</table>
                </div>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserManage);
