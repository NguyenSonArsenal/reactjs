import React from "react";

class AvatarBlurb extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.value
        }
    }

    render() {
        return (
            <div className="inline-editor">
                <div className="editor">
                    <input type="text" className="input-editor" value={this.state.name}/>
                </div>
                <div className="control-edit">
                    <div className="btn-control margin-left" onClick={this.cancel}>Cancel</div>
                    <div className="btn-control btn-save">Save</div>
                </div>
            </div>
        );
    }
}

export default AvatarBlurb;