import logo from './logo.svg';
import './App.css';
import FlashRadioSwitch from "./component/FlashRadioSwitch.jsx";
import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      txtLeft: 'I will travel in radius',
      txtRight: 'I will not travel',
    };
  }

  handleOnchangeInputLabelOn(e) {
    this.setState({
      txtLeft: e.target.value
    });
  }

  handleOnchangeInputLabelOff(e) {
    this.setState({
      txtRight: e.target.value
    });
  }

  render() {
    return (
      <div className="App">
        <div className="wrapper">
          <h3 style={{ textAlign: 'center' }}>App FlashRadioSwitch</h3>
          <div className="label on">
            <p>Label On</p>
            <input className="inputLabel" value={this.state.txtLeft} onChange={this.handleOnchangeInputLabelOn.bind(this)} type="text" placeholder="Enter label On"/>
          </div>
          <div className="label off">
            <p>Label Off</p>
            <input className="inputLabel" value={this.state.txtRight} onChange={this.handleOnchangeInputLabelOff.bind(this)} type="text" placeholder="Enter label Off"/>
          </div>
          <FlashRadioSwitch
            txtLeft = {this.state.txtLeft}
            txtRight = {this.state.txtRight}
          />
        </div>
      </div>
    )
  }
}

export default App;
