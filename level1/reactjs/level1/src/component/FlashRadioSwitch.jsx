import React from 'react';

class FlashRadioSwitch extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div className="control">
                <div className="label left">{this.props.txtLeft}</div>
                <div className="label right">{this.props.txtRight}</div>
            </div>
        );
    }
}
export default FlashRadioSwitch;