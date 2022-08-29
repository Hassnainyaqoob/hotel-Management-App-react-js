import React from "react";
import {
    BrowserRouter as Router, Routes, Route,
} from "react-router-dom";
import Modals from "../../components/modal";
import Dashboards from "../../pages/dashboard";
import Profile from "../../pages/dashboardscreens/profile";
import Login from "../../pages/login";
import NOTFOUND from "../../pages/notfound";
import Signup from "../../pages/signup";

export default function Routerings() {



    return (

        <Router>
            <Routes >

                {/* <Route path='/signuup' element={<Signup />} />

                <Route path='/login' element={<Login />} /> */}

                <Route path='/*' element={<Dashboards />} />

                <Route path="*" element={<NOTFOUND />} />

            </Routes>
        </Router>

    )
}









