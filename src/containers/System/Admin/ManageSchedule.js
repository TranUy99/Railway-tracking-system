import React, { Component } from 'react';
import { connect } from 'react-redux';
import './ManageSchedule.scss';
import Select from 'react-select';
import * as action from "../../../store/actions";
import DatePicker from '../../../components/Input/DatePicker';
import moment from "moment";
import { FormattedMessage } from 'react-intl';
import { range } from 'lodash';

class ManageSchedule extends Component {

    constructor (props) {
        this.state = {
            listTrains: [],
            selectTrain: [],
            currentDate: '',
            rangeTime: [],
        }
    }

    componentDidMount() {
        this.props.fetchAllTrain();
        this.props.fetchAllScheduleTime();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.allTrain !== this.props.allTrain) {
            let dataSelect = this.buildDataInputSelect(this.props.allTrain)
            this.setState({
                listTrains: dataSelect
            })
        }
        if (prevProps.fetchAllScheduleTime !== this.props.fetchAllScheduleTime) {
            this.setState({
                rangeTime: this.props.allScheduleTime
            })
        }
    }

    buildDataInputSelect = (inputData) => {
        let result = [];
        let {language} = this.props;
        if (inputData && inputData.length > 0) {
            inputData.map(item, index) => {
                let object = [];
                object.value = item.id;
                result.push(object)
            }
        }
        return result;
    }

    handleChangeSelect = async (selectOption) => {
        this.setState({ selectedTrain: selectedOption});
    }

    handleOnchangeDatePicker = (date) => {
        this.setState({
            currentDate: date[0]
        })
    }


    render() {
        console.log(' check state:', this.state)
        let {rangeTime} = this.state;
        return (
           <div className = "schedule-container">
              <div className = "m-s-title">
                   <FormattedMessage id = "manage.schedule.title" ></FormattedMessage>
              </div>
              <div className='container'>
                  <div className='row'>
                      <div className='col-6 form group'>
                          <label><FormattedMessage id = "manage-schedule.choose.train"></FormattedMessage></label>
                          <Select
                            value = {this.state.selectedTrain}
                            onChange = {this.handleChangeSelect}
                            options = {this.state.listDoctors}
                            />
                        </div>
                        <div className='col-6 form-group'>
                            <label><FormattedMessage id = "manage-schedule.choose-date"></FormattedMessage></label>
                            <DatePicker
                                onChange = {this.handleOnchangeDatePicker}
                                className = "form-control"
                                value = {this.state.currentDate}
                                minDate = {newDate()}>

                            </DatePicker>
                        </div>
                        <div className='col-12 pick-hour-container'>
                            {rangeTime && rangeTime.length >0 && rangeTime.map((item, index) => {
                                return (
                                    <button className='btn btn-schedule' key={index}></button>
                                )
                            })}
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

export default connect(mapStateToProps, mapDispatchToProps)(ManageSchedule);
