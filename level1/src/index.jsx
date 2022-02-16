import React from 'react';
import { render } from 'react-dom';
import './css/index.css';
import FlashRadioSwitch from "./component/FlashRadioSwitch.jsx";

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            txtLeft : "Left",
            txtRight : "Right",
        };
        this.handleChangeOn = this.handleChangeOn.bind(this);
        this.handleChangeOff = this.handleChangeOff.bind(this);
    };
    handleChangeOn(e) {
        this.setState({txtLeft: e.target.value});
    }
    handleChangeOff(e) {
        this.setState({txtRight: e.target.value});
    }
    render() {
        return (
            <div className="wrapper">
                <h3 style={{ textAlign: 'center' }}>App FlashRadioSwitch</h3>
                <div className="label on">
                    <p>Label On</p>
                    <input className="inputLabel" onChange={this.handleChangeOn} type="text" placeholder="Enter label On"/>
                </div>
                <div className="label off">
                    <p>Label Off</p>
                    <input className="inputLabel" onChange={this.handleChangeOff} type="text" placeholder="Enter label Off"/>
                </div>

                <FlashRadioSwitch
                    txtLeft = {this.state.txtLeft}
                    txtRight = {this.state.txtRight}
                />
            </div>
        );
    }
}

render(<App />, document.getElementById('app'));