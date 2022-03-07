import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Route, Routes, withRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./component/Home";
import Register from "./component/Register";
import Login from "./component/Login";
import ForGotPassword from "./component/ForGotPassword";
import NoPage from "./pages/NoPage";

ReactDOM.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="login" element={<Login />} />
                <Route path="register" element={<Register />} />
                <Route path="forgot-password" element={<ForGotPassword />} />
                <Route path="*" element={<NoPage />} />
            </Route>
        </Routes>
    </BrowserRouter>,
    document.getElementById('root')
);
