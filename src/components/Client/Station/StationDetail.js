import React, { Component, Fragment } from 'react';
import { connect } from "react-redux";
import HomeHeader from '../../../containers/HomePage/HomeHeader';
import './StationDetail.scss';
import Detail1 from "../../../assets/stationimg/station1.jpg";
import DatePicker from '../../../components/Input/DatePicker';

class StationDetail extends Component {

     constructor(props) {
        super(props);
        this.state = {
            isShowTicket: false,
            currentDate: "",

        }
    }

    handleOnChangeDatePicker = () => ({

    })

    showHideButton = (status) => {
        this.setState({
            isShowTicket: status
        })
    }

    handleOnBuyTicket = () => {
        alert('Successful, be save and enjoy you trip!')
    }

    // handleShowButton = () => {
    //     this.setState({
    //          isShow: !this.state.isShow,
    //     })
    //     console.log("he");
    // }

    componentDidMount() {
        
    }
    

    render() {
        let {isShowTicket} = this.state;

        // var handleShowButton = e =>
        // {
        //     this.setState({isShow: !this.state.isShow});
        // }

        // const x = this.state.isShow;
        
        // console.log(this.props.match.param.id)
        // console.log('check new', this.props.params.id);
        const { systemMenuPath, isLoggedIn } = this.props;
        return (
           <>
               <HomeHeader 
                isShowBanner = {false}
               />
              
               <div className = "station-detail-container">
                  <div className = "intro-station">
                      <div className = "content-left">
                          <div className = "detail-img">

                          </div>
                      </div>
                      <div className = "content-right">
                    
                          <div className = "down">
                              <div className='up-content'>
                                  SaiGon Station
                              </div>
                              <div className = "down-content">
                                  Address: 1 Nguyen Thong Street District 3
                              </div>
                              <div className = "down-working-hours">
                                  Working hours: 
                              </div>
                              <div className = "hours-content">
                                  Monday-Friday: 7h30 - 22h30<br/>
                                  Sunday: Allday
                              </div>
                              { isShowTicket === false && 
                                <button 
                                className = "btn btn-buy"
                                onClick={() => this.showHideButton(true)}
                                >
                                    Buy ticket
                                    
                                </button>
                              }
                              
                          </div>
                      </div>
                  </div>
                  <div className = "schedule">
                        <div className = "s-title">
                            Available
                        </div>
                        <div className = "title-content">
                            <div className = "title-icon">
                                <i class="fas fa-train"></i>
                            </div>
                            <div className = "title-text">
                            Sai Gon - Thanh Hoa
                             </div>
                             <div className = "title-time">
                            7:00 AM
                             </div>
                        </div>
                        <div className = "title-content">
                            <div className = "title-icon">
                                <i class="fas fa-train"></i>
                            </div>
                            <div className = "title-text">
                            Sai Gon - Hai Phong
                             </div>
                             <div className = "title-time">
                            7:00 AM
                             </div>
                        </div>
                        <div className = "title-content">
                            <div className = "title-icon">
                                <i class="fas fa-train"></i>
                            </div>
                            <div className = "title-text">
                            Sai Gon - Bien Hoa
                             </div>
                             <div className = "title-time">
                            8:00 AM
                             </div>
                        </div>
                        <div className = "title-content">
                            <div className = "title-icon">
                                <i class="fas fa-train"></i>
                            </div>
                            <div className = "title-text">
                            Sai Gon - Bac Lieu
                             </div>
                             <div className = "title-time">
                            9:30 AM
                             </div>
                        </div>
                        <div className = "title-content">
                            <div className = "title-icon">
                                <i class="fas fa-train"></i>
                            </div>
                            <div className = "title-text">
                            Sai Gon - Ha Noi
                             </div>
                             <div className = "title-time">
                            2:00 PM
                             </div>
                        </div>
                        <div className = "title-content">
                            <div className = "title-icon">
                                <i class="fas fa-train"></i>
                            </div>
                            <div className = "title-text">
                            Sai Gon - Nam Dinh
                             </div>
                             <div className = "title-time">
                            9:00 PM
                             </div>
                        </div>
                        <div className = "container">
                            <div className = "row">
                                <div className = "col-6">
                                    <label></label>
                                </div>
                            </div>
                        </div>
                  </div>
                  <div className = "detail-info">

                  </div>
                  <div className = "comment">

                  </div>
                 
                  {isShowTicket === true && 
                    <>
                        <div className =  "ticket-modal">
                            <div className = "ticket-container">
                            <i className = "fas fa-times ticket-close"
                            onClick={() => this.showHideButton(false)}
                            > 
                            </i>
                                <div className = "ticket-header">
                                <i className = "fas fa-cart-plus"></i>
                                Tickets
                                
                            
                                </div>
                                <div className = "ticket-body">
                                    <div className = "left">

                                <label className = "ticket-label">Choose your travel</label>
                                <select className = "form-control">
                                    <option select = "Choose..."></option>
                                    <option>Sai Gon - Hai Phong</option>
                                    <option>Sai Gon - Can Tho</option>
                                    <option>Sai Gon - Soc Trang</option>
                                </select>
                                <label>Time</label>
                                <select className = "form-control">
                                    <option className = "ticket-option" select = "Choose..."></option>
                                    <option>7:00 AM</option>
                                    <option>8:00 AM</option>
                                    <option>9:00 AM</option>
                                    <option>10:00 AM</option>
                                    <option>11:00 AM</option>
                                </select>
                                <label>Tickets</label>
                                <select className = "form-control">
                                    <option select = "Choose..."></option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>2</option>
                                    <option>4</option>
                                    <option>5</option>
                                </select>
                                <label>Choose your seat</label>
                                <select className = "form-control">
                                    <option select = "Choose..."></option>
                                    <option>Hardcore sofa</option>
                                    <option>Bedroom with 2 beds</option>
                                    <option>Bedroom with 4 beds</option>
                                    <option>Bedroom with 6 beds</option>
                                    <option>Standard</option>
                                </select>
                                <label>Choose date</label>
                                <DatePicker onChange =  {this.handleOnChangeDatePicker} className = "form-control" 
                                minDate = {new Date()}
                                />
                                    </div>
                                    <div className = "right">

                                    </div>
                                    <button className = "btn-ticket"
                                    onClick={() => this.handleOnBuyTicket()}
                                    >
                                    Buy 
                                </button>
                            </div>
                            <div className = "ticket-footer">
                            <p className = "ticket-help">
                                need
                                <a href = "https://www.google.com/"> helps?</a>
                            </p>
                                
                                </div>
                                
                        </div>
                        </div>
                    </>
                  }
                     
                            
                     
                
                 
                    
                
                  
                 
                  
               </div>
           </>
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

export default connect(mapStateToProps, mapDispatchToProps)(StationDetail);
