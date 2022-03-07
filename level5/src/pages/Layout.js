import React from "react";
import { Outlet, Link } from "react-router-dom";

class Layout extends React.Component {
    render() {
        return (
            <>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/login">Login</Link></li>
                        <li><Link to="/register">Register</Link></li>
                        <li><Link to="/forgot-password">Forgot-password</Link></li>
                    </ul>
                </nav>

                <Outlet />
            </>
        );
    }
}

export default Layout;
