import React from "react";
import {connect} from "react-redux";
import moment from 'moment-timezone';
import "bootstrap/dist/css/bootstrap.min.css";
import CreateSkill from './component/CreateSkill'

const mapStateToProps = store => ({
    skills: store.skillReducer
});

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            timeZone: 'Asia/Ho_Chi_Minh',
            isShowInputForm: false,
            idActiveInputForm: -1,
            inputTmp: '',
            btnControlActive: '',
            isShowFormCreateSkill: false,
        }
    }

    changeTimeZone(e) {
        this.setState({
            timeZone: e.target.getAttribute('id')
        });
    }

    sort(e, btnControl){
        this.props.dispatch({
            type: 'SORT',
            payload: {
                sortType: e.target.getAttribute('data-sort-type'),
                column: e.target.getAttribute('data-column'),
            },
        });
        this.setState({
            btnControlActive: btnControl
        })
    };

    // Active button sort control
    isActive(value){
        return value == this.state.btnControlActive ? 'active' : '';
    }

    handleCancel() {
        this._clearState();
    }

    showAvatarBlurb(item, e) {
        this.setState({
            isShowInputForm: true,
            idActiveInputForm: item.id,
            inputTmp: item.tagLine,
        })
    }

    handleOnChangeInputTagLine(e) {
        this.setState({
            inputTmp: e.target.value
        })
    }

    updateTagLine(id) {
        this.props.dispatch({
            type: 'UPDATE_TAG_LINE',
            payload: {
                id: id,
                tagLine: this.state.inputTmp
            }
        });
        this._clearState();
    }

    _clearState() {
        this.setState({
            isShowInputForm: false,
            inputTmp: ''
        });
    }

    moveCaretAtEnd(e) {
        let temp_value = e.target.value;
        e.target.value = '';
        e.target.value = temp_value
    }

    render() {
        return (
            <div className="wrapper">
                <div className="create-skill mb-3">
                    <button className="btn btn-primary btn-sm" onClick={ () => this.setState({isShowFormCreateSkill: !this.state.isShowFormCreateSkill})  }>Add</button>
                    {this.state.isShowFormCreateSkill && <CreateSkill />}
                </div>

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
                        this.props.skills.map(item => (
                            <div className='item' key={item.id}>
                                <div className="control">
                                    <div className="thumb-avatar">
                                        <img src={item.avatar} alt="image name"/>
                                    </div>
                                    <div className="extends">
                                        <div style={{fontWeight: 'bold'}}>{item.name}</div>
                                        <div className="title">
                                            <span className="max-character-length">{item.tagLine}&nbsp;&nbsp;</span>
                                            <a className="edit" href="#" onClick={(e) => this.showAvatarBlurb(item, e)}>Edit</a>
                                        </div>
                                        <time>{moment(item.dateAdded).tz(this.state.timeZone).format('DD-MM-YYYY LTS')}</time>
                                    </div>
                                </div>

                                <div className="inline-editor" style={{ display: (this.state.isShowInputForm && this.state.idActiveInputForm == item.id) ? 'block' : 'none'}}>
                                    <div className="editor">
                                        <input type="text"
                                               ref={(input) => {input && input.focus()}}
                                               className="input-editor"
                                               onChange={this.handleOnChangeInputTagLine.bind(this)}
                                               defaultValue={item.tagLine}
                                               autoFocus
                                               onFocus={this.moveCaretAtEnd}
                                        />
                                    </div>
                                    <div className="control-edit">
                                        <div className="btn-control margin-left" onClick={this.handleCancel.bind(this)}>Cancel</div>
                                        <div className="btn-control btn-save" onClick={() => this.updateTagLine(item.id)}>Save</div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className="control-arrange">
                    <div className={`btn-arrange ${this.isActive('time_asc')}`} data-sort-type="asc" data-column="dateAdded" onClick={(e) => this.sort(e,  'time_asc')}>Ascending Time</div>
                    <div className={`btn-arrange ${this.isActive('time_des')}`} data-sort-type="desc" data-column="dateAdded" onClick={(e) => this.sort(e,  'time_des')}>Descending Time</div>
                </div>
                <div className="control-arrange">
                    <div className={`btn-arrange ${this.isActive('name_asc')}`} data-sort-type="asc" data-column="name" onClick={(e) => this.sort(e,  'name_asc')}>Ascending Name</div>
                    <div className={`btn-arrange ${this.isActive('name_des')}`} data-sort-type="desc" data-column="name" onClick={(e) => this.sort(e,  'name_des')}>Descending Name</div>
                </div>
            </div>
        );
    }
}

export default connect(
    mapStateToProps
)(App);
