import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Home from "./Pages/HomePage";
import Dashboard from "./Pages/Dashboard/Dashboard";
import FindJobs from "./Pages/FindJobs/FindJobs";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Profile from "./Pages/Profile/Profile";
import NoPage from "./Pages/NoPage/NoPage";

const App = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/app" element={<Layout />}>
                    <Route path="dashboard" element={<Dashboard />} />
                    <Route path="jobs" element={<FindJobs />} />
                    <Route path="login" element={<Login />} />
                    <Route path="register" element={<Register />} />
                    <Route path="profile" element={<Profile />} />
                    <Route path="*" element={<NoPage />} />
                </Route>
            </Routes>
        </>
    );
};

export default App;
