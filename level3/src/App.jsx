import React from "react";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            maxHeight: 40,
            showMore: false,
            showBtnControl: false,
            content: '',
            height: ''
        }
    }

    componentDidUpdate() {
        this.updateHeight();
    }

    updateHeight() {
        let height = this.div ? this.div.scrollHeight : 0;
        let status = this.state.height > this.state.maxHeight ? true : false;
        if (this.state.height != height) {
            this.setState({
                height: height,
                showBtnControl: status,
                showMore: status,
            })
        }
    }

    handleChange = (e) => {
        let status = this.state.height > this.state.maxHeight ? true : false;
        this.setState({
            content: e.target.value,
            showBtnControl: status,
            showMore: status
        })
    };

    handleCollapsedContent = () => {
        let isShowMore = this.state.showMore;
        this.setState({
            showMore: !isShowMore
        })
    };

    render(){
        let button = '';
        if (this.state.showBtnControl) {
            button = this.state.showMore == true ? 'More' : 'Less';
        }
        let className = this.state.showMore ? 'content collapsed' : 'content';

        return(
            <div className="wrapper">
                <div className="component">
                    <div className={className} ref={ div => { this.div = div; } } >
                        { this.state.content}
                    </div>
                    <div className="button"  style={{ color: "blue", cursor: "pointer" }} onClick={this.handleCollapsedContent}>
                        {button}
                    </div>
                </div>
                <textarea name="" id="" cols="30" rows="10" onChange={this.handleChange}></textarea>
            </div>
        )
    }
}


export default App;