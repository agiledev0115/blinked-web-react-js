import React, { useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

const Dashboard = ({ children, title }) => {
    const [activeSidebar, setActiveSidebar] = useState(false);
    return (
        <div className="dashboard-main">
            <div className="d-flex justify-content-end">
                <Sidebar activeSidebar={activeSidebar} setActiveSidebar={setActiveSidebar}/>
                <div className="dashboard-container pb-4">
                    <Header title={title} handleSideBar={() => setActiveSidebar(!activeSidebar)}/>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
