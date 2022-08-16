// import { formatNumber } from '@formatjs/intl';
// import { functionsIn } from 'lodash';
// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import MarkDownIt from 'markdown-it';
// import MdEditor from 'react-markdown-editor-lite';
// import 'react-markdown-editor-lite/lib/index.css';
// // import './StationManage.scss';

// const mdParser = new MarkDownIt();

// class StationManage extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
              
//         }
//     }

//     render() {

//         // componentDidMount(){

        

//         // };

//         // componentDidUpdate(prevProps, prevState, snapshot) {

//         // };
        
//         // handleEditorChange({html, text}) {
//         //     console.log('handleEditorChange', html, text);
//         // }

//         return (
//            <React.Fragment>
//                <div className = "manage-station-container">
//                    <div className = "manage-station-title">
//                         Add station info
//                    </div>
//                    <div className='manage-station-editor'>
//                        <MdEditor
//                        style = {{height: '500px'}}
//                        renderHTML = {text => mdParser.render(text)}
//                        onChange = {() => this.handleEditorChange} >

//                        </MdEditor>
//                    </div>
//                </div>
//            </React.Fragment>
//         );
//     }

// }

// const mapStateToProps = state => {
//     return {
//         isLoggedIn: state.user.isLoggedIn
//     };
// };

// const mapDispatchToProps = dispatch => {
//     return {
//     };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(StationManage);
