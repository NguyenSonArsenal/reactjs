import React from "react";
import {connect} from "react-redux";
import moment from 'moment-timezone';

const mapStateToProps = store => ({
    skills: store.skillReducer.state
});

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="wrapper">
                <div className="choose-timezone">
                    <span>Timezone: </span>
                    <input type="radio" name="timezone" value="" id="Asia/Tokyo"/>
                    <label htmlFor="Asia/Tokyo">Tokio</label>&nbsp;&nbsp;
                    <input type="radio" name="timezone" value="" id="Asia/HaNoi" defaultChecked/>
                    <label htmlFor="Asia/HaNoi">Ha Noi</label>&nbsp;&nbsp;
                    <input type="radio" name="timezone" value="" id="Asia/London"/>
                    <label htmlFor="Asia/London">London</label>
                </div>
                <div className="list-control">
                    {
                        this.props.skills.map(item => (
                            <div className="control" key={item.id}>
                                <div className="thumb-avatar">
                                    <img src={item.avatar} alt="image name"/>
                                </div>
                                <div className="extends">
                                    <div style={{fontWeight: 'bold'}}>{item.name}</div>
                                    <div className="title">
                                        <span className="max-character-length">{item.tagline}&nbsp;&nbsp;</span>
                                        <a className="edit" href="#">Edit</a>
                                    </div>
                                    <time>{moment(item.date_added).tz('Asia/Tokyo').format('DD-MM-YYYY LTS')}</time>
                                </div>
                            </div>
                        ))
                    }
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