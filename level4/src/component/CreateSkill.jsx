import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import { Field, reduxForm } from 'redux-form'
import ErrorValidation from "./ErrorValidation";

class CreateSkill extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name : '',
            tagline : '',
            date_added : '',
            errorsValidate: {},
        }
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
            alert("Form submitted");
        }
    }

    validationForm() {
        let errorsValidate = {};

        if (!this.state.name) {
            errorsValidate.name = "Trường tên là bắt buộc nhập";
        }

        if (!this.state.tagline) {
            errorsValidate.tagline = "Trường tag-line là bắt buộc nhập";
        }

        if (!this.state.date_added) {
            errorsValidate.date_added = "Trường date là bắt buộc nhập";
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
                        <label htmlFor="tagline" className="form-label">Tag line (*)</label>
                        <input type="text" name="tagline" className="form-control" placeholder="Please enter tagline" onChange={e => this.changeInputValue(e)}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="date_added" className="form-label">Date (*)</label>
                        <input type="date" name="date_added" className="form-control" onChange={e => this.changeInputValue(e)}/>
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

export default CreateSkill;

