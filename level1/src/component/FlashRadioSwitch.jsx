import React from 'react';

class FlashRadioSwitch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: true,
        }
    }

    changeColor(e) {
        let className = e.target.className;
        if (!className.includes("bgOn")) {
            this.setState({
                active: !this.state.active
            })
        }
    }

    render() {
        return (
            <div className="control">
                <div className={`label ${this.state.active == true ? 'bgOn' : ''}`}
                     onClick={this.changeColor.bind(this)}>{this.props.txtLeft}
                </div>
                <div className={`label ${this.state.active == false ? 'bgOn' : ''}`}
                     onClick={this.changeColor.bind(this)}>{this.props.txtRight}
                </div>
            </div>
        );
    }
}

export default FlashRadioSwitch;