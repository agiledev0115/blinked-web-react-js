import React, { useState } from "react";
import { useEffect } from "react";
import { MdClose } from "react-icons/md";
import { useHistory } from "react-router-dom";
import { agentsMenu, feedbackMenu, homeMenu, logoutMenu, orderMenu, settingMenu } from "../assets/img";
import bLinkedLogo from '../assets/landing/bLinkedLogo.svg';

const Sidebar = ({ activeSidebar, setActiveSidebar }) => {
    const [activeMenu, setActiveMenu] = useState("home");

    const handleClick = (menuItem) => {
        setActiveSidebar(!activeSidebar);
        history.push(`/${menuItem}`);
    };

    const history = useHistory();

    const handleLogout = () => {
        localStorage.removeItem('accessToken');
        history.push('/');
    };

    useEffect(() => {
        setActiveMenu(history.location.pathname.substring(1));
    }, [history.location.pathname]);

    return (
        <div className={!activeSidebar ? "" : "sidebar-bg"}>
            <div className={!activeSidebar ? "sidebar-main" : "sidebar-main active"}>
                <div className="mt-5 position-relative sidebar-logo" style={{ cursor: 'pointer' }}>
                    <img
                        src={bLinkedLogo}
                        alt="Logo"
                        className="img-fluid"
                        style={{ margin: "-12rem 0", maxHeight: '150px' }}
                        onClick={() => history.push("/home")}
                    />
                    <div onClick={() => setActiveSidebar(!activeSidebar)} className="d-flex d-md-none">
                        <MdClose />
                    </div>
                </div>
                <div className="sidebar-menu">
                    <ul className="mt-5">
                        <li
                            className={activeMenu === "home" ? "active" : ""}
                            onClick={() => handleClick("home")}
                        >
                            <div>
                                <span>
                                    <img src={homeMenu} alt="Home" className="img-fluid" />
                                </span>
                                <span>Home</span>
                            </div>
                        </li>

                        <li
                            className={activeMenu === "orders" ? "active" : ""}
                            onClick={() => handleClick("orders")}
                        >
                            <div>
                                <span>
                                    <img
                                        src={orderMenu}
                                        alt="Order"
                                        className="img-fluid"
                                    />
                                </span>
                                <span>Orders</span>
                            </div>
                            <div>1</div>
                        </li>
                        <li
                            className={activeMenu === "feedback" ? "active" : ""}
                            onClick={() => handleClick("feedback")}
                        >
                            <div>
                                <span>
                                    <img
                                        src={feedbackMenu}
                                        alt="Feedback"
                                        className="img-fluid"
                                    />
                                </span>
                                <span>Feedback</span>
                            </div>
                        </li>
                        <li
                            className={activeMenu === "agents" ? "active" : ""}
                            onClick={() => handleClick("agents")}
                        >
                            <div>
                                <span>
                                    <img
                                        src={agentsMenu}
                                        alt="Agent"
                                        className="img-fluid"
                                    />
                                </span>
                                <span>Agents</span>
                            </div>
                        </li>
                        <li
                            className={activeMenu === "settings" ? "active" : ""}
                            onClick={() => handleClick("settings")}
                        >
                            <div>
                                <span>
                                    <img
                                        src={settingMenu}
                                        alt="Setting"
                                        className="img-fluid"
                                    />
                                </span>
                                <span>Settings</span>
                            </div>
                        </li>
                        <li onClick={handleLogout}>
                            <div>
                                <span>
                                    <img
                                        src={logoutMenu}
                                        alt="Logout"
                                        className="img-fluid"
                                    />
                                </span>
                                <span>Logout</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
