import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

class ErrorValidation extends React.Component {
    constructor(props) {
        super(props);
    }

    displayErrorValidation() {
        let errorsValidate = this.props.errorsValidate;
        const isEmpty = Object.keys(errorsValidate).length === 0; // Check if an Object is Empty in JavaScript

        if (isEmpty) {
            return;
        }

        let errors = Object.keys(errorsValidate).map((field) => {
            return <li key={field}>{errorsValidate[field]}</li>
        });

        return (
            <ul>{errors}</ul>
        );
    };

    render() {
        return (
            <>
                {this.displayErrorValidation()}
            </>
        );
    }
}

export default ErrorValidation;
