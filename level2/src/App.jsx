import React from "react";
import {connect} from "react-redux";
import moment from 'moment-timezone';

const mapStateToProps = store => ({
    skills: store.skillReducer.state
});

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            timeZone: 'Asia/Ho_Chi_Minh',
            skills: this.props.skills
        }
    }

    changeTimeZone(e) {
        this.setState({
            timeZone: e.target.getAttribute('id')
        });
    }

    sort(e) {
        let newSkills = [];
        let sortType = e.target.getAttribute('data-sort-type');
        let column = e.target.getAttribute('data-column');

        if (sortType == 'asc') {
            newSkills = [].concat(this.state.skills).sort((a, b) => a[column] >= b[column] ? 1 : -1);
        } else {
            newSkills = [].concat(this.state.skills).sort((a, b) => a[column] < b[column] ? 1 : -1);
        }

        this.setState({
            skills: newSkills
        })
    }

    render() {
        return (
            <div className="wrapper">
                <div className="choose-timezone">
                    <span>Timezone: </span>
                    <input type="radio" name="timezone" value="" id="Asia/Tokyo" onChange={this.changeTimeZone.bind(this)}/>
                    <label htmlFor="Asia/Tokyo">Tokyo</label>&nbsp;&nbsp;
                    <input type="radio" name="timezone" value="" id="Asia/Ho_Chi_Minh" defaultChecked onChange={this.changeTimeZone.bind(this)}/>
                    <label htmlFor="Asia/Ho_Chi_Minh">Ha Noi</label>&nbsp;&nbsp;
                    <input type="radio" name="timezone" value="" id="Europe/London" onChange={this.changeTimeZone.bind(this)}/>
                    <label htmlFor="Europe/London">London</label>
                </div>
                <br/>
                <div style={{color: 'red'}}>
                    <small>Now: { moment().tz(this.state.timeZone).format('DD-MM-YYYY LTS') }</small>
                </div>
                <div className="list-control">
                    {
                        this.state.skills.map(item => (
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
                                    <time>{moment(item.date_added).tz(this.state.timeZone).format('DD-MM-YYYY LTS')}</time>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className="control-arrange">
                    <div className="btn-arrange" data-sort-type="asc" data-column="date_added" onClick={this.sort.bind(this)}>Ascending Time</div>
                    <div className="btn-arrange" data-sort-type="desc" data-column="date_added" onClick={this.sort.bind(this)}>Descending Time</div>
                </div>
                <div className="control-arrange">
                    <div className="btn-arrange" data-sort-type="asc" data-column="name" onClick={this.sort.bind(this)}>Ascending Name</div>
                    <div className="btn-arrange" data-sort-type="desc" data-column="name" onClick={this.sort.bind(this)}>Descending Name</div>
                </div>
            </div>
        );
    }
}

export default connect(
    mapStateToProps
)(App);