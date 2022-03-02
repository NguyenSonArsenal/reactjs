import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

class CreateSkill extends React.Component {
    render() {
        return (
            <div className="container mt-3">
                <h2 className="text-center">Register</h2>
                <div>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input type="text" name="name" className="form-control" id="name" placeholder="Please enter name"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="tagline" className="form-label">Tag line</label>
                        <input type="text" name="tagline" className="form-control" id="tagline" placeholder="Please enter tagline"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="date_added" className="form-label">Date</label>
                        <input type="date" name="date_added" className="form-control" id="date_added"/>
                    </div>
                    <div className="col-12">
                        <button className="btn btn-primary" type="submit">
                            Register
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default CreateSkill;