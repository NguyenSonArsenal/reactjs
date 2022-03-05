import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import { Field, reduxForm } from 'redux-form'
import ErrorValidation from "./ErrorValidation";
import {connect} from 'react-redux';

class CreateSkill extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name : '',
            tagLine : '',
            dateAdded : '',
            errorsValidate: {},
        };
    }

    changeInputValue(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        let errorValidate = this.validationForm();

        if (Object.keys(errorValidate).length == 0) {
            this.props.dispatch({
                type: 'STORE',
                payload: {
                    name: this.state.name,
                    tagLine: this.state.tagLine,
                    dateAdded: this.state.dateAdded
                }
            });
        }
    }

    validationForm() {
        let errorsValidate = {};

        if (!this.state.name) {
            errorsValidate.name = "Trường tên là bắt buộc nhập";
        }

        if (!this.state.tagLine) {
            errorsValidate.tagLine = "Trường tag-line là bắt buộc nhập";
        }

        if (!this.state.dateAdded) {
            errorsValidate.dateAdded = "Trường date là bắt buộc nhập";
        }

        this.setState({errorsValidate});

        return errorsValidate;
    }

    render() {
        return (
            <div className="container mt-3">
                <h2 className="text-center">Register</h2>
                <div className="errors">
                    <ErrorValidation errorsValidate={this.state.errorsValidate}/>
                </div>
                <form onSubmit={e => this.handleSubmit(e)}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name (*)</label>
                        <input type="text" name="name" className="form-control" placeholder="Please enter name" onChange={e => this.changeInputValue(e)}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="tagLine" className="form-label">Tag line (*)</label>
                        <input type="text" name="tagLine" className="form-control" placeholder="Please enter tag line" onChange={e => this.changeInputValue(e)}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="dateAdded" className="form-label">Date (*)</label>
                        <input type="date" name="dateAdded" className="form-control" onChange={e => this.changeInputValue(e)}/>
                    </div>
                    <div className="col-12">
                        <button className="btn btn-primary btn-sm mr-1" type="submit">
                            Submit
                        </button>
                        <button className="btn btn-danger btn-sm" type="reset">
                            Reset
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}

const mapStateReduxToPropsComponent = () => ({});
export default connect(mapStateReduxToPropsComponent)(CreateSkill);

