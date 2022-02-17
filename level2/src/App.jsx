import React from "react";
import {connect} from "react-redux";
import logo from './logo.svg';

const mapStateToProps = state => ({
    skills: state.skillReducer
});

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            skills: props.skills,
        }
    }

    render() {
        let clone = [...this.state.skills];
        return (
            <div className="wrapper">
                <div className="choose-timezone">
                    <span>Timezone: </span>
                    <input type="radio" name="timezone" value="" id="Asia/Tokyo"/>
                    <label for="Asia/Tokyo">Tokio</label>
                    <input type="radio" name="timezone" value="" id="Asia/HaNoi" checked/>
                    <label for="Asia/HaNoi">Ha Noi</label>
                    <input type="radio" name="timezone" value="" id="Asia/London"/>
                    <label for="Asia/London">London</label>
                </div>
                <div className="list-control">
                    {clone.map((value, index) => {
                        <div className="control">
                            <div className="thumb-avatar">
                                <img src='./images/1.jpg' alt="image name"/>
                            </div>
                            <div className="extends">
                                <div style={{fontWeight: 'bold'}}>One</div>
                                <div className="title">
                                    <span className="max-character-length">If you have a bad day, catch a wave </span>
                                    <a className="edit" href="#">Edit</a>
                                </div>
                                <time dateTime="1504233072000">September 01, 2017 09:31 AM</time>
                            </div>
                        </div>
                    })}
                    <div className="control">
                        <div className="thumb-avatar">
                            <img src='./images/1.jpg' alt="image name"/>
                        </div>
                        <div className="extends">
                            <div style={{fontWeight: 'bold'}}>One</div>
                            <div className="title">
                                <span className="max-character-length">If you have a bad day, catch a wave </span>
                                <a className="edit" href="#">Edit</a>
                            </div>
                            <time dateTime="1504233072000">September 01, 2017 09:31 AM</time>
                        </div>
                    </div>
                    <div className="control">
                        <div className="thumb-avatar">
                            <img src='./images/1.jpg' alt="image name"/>
                        </div>
                        <div className="extends">
                            <div style={{fontWeight: 'bold'}}>One</div>
                            <div className="title">
                                <span className="max-character-length">If you have a bad day, catch a wave </span>
                                <a className="edit" href="#">Edit</a>
                            </div>
                            <time dateTime="1504233072000">September 01, 2017 09:31 AM</time>
                        </div>
                    </div>
                </div>
                <div className="control-arrange">
                    <div className="btn-arrange" id="asc">Ascending Time</div>
                    <div className="btn-arrange" id="desc">Descending Time</div>
                </div>
            </div>
        );
    }
}

export default connect(
    mapStateToProps
)(App);