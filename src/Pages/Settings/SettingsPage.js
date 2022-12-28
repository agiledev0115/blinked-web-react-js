import React, { useState } from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import Dashboard from "../../Components/Dashboard";
import SettingsChangePassword from "./ChangePassword";
import UserProfile from "./UserProfile";

const SettingsPage = () => {
    const [menuActive, setMenuActive] = useState(false);
    const [menu, setMenu] = useState("profile");

    const handleMenu = () => {
        setMenuActive(!menuActive);
    };

    return (
        <Dashboard title="General settings">
            <div className="px-md-4 px-2 pb-4 mt-4">
                <div className="settings-container h-100">
                    <div className="settings-menu-container ">
                        <ul>
                            <li
                                className={menu === "profile" ? "active" : ""}
                                onClick={() => { setMenu("profile") }}
                            >
                                User profile
                            </li>
                            <li
                                className={menu === "changepassword" ? "active" : ""}
                                onClick={() => setMenu("changepassword")}
                            >
                                Change password
                            </li>
                        </ul>
                    </div>
                    <div className={menu === "teammember" ? "settings-form-container w-100" : "settings-form-container"}>
                        <div
                            onClick={handleMenu}
                            className="d-flex d-md-none pb-0 mt-3 justify-content-end"
                        >
                            <HiOutlineMenuAlt3 size={28} />
                        </div>
                        <div
                            className="settings-menu-responsive-container  shadow-sm"
                            style={{
                                height: !menuActive ? 0 : 255,
                            }}
                        >
                            <ul className="pt-4">
                                <li
                                    className={menu === "profile" ? "active" : ""}
                                    onClick={() => {
                                        handleMenu()
                                        setMenu("profile")
                                    }}
                                >
                                    User profile
                                </li>
                                <li
                                    className={menu === "changepassword" ? "active" : ""}
                                    onClick={() => {
                                        handleMenu()
                                        setMenu("changepassword")
                                    }}
                                >
                                    Change password
                                </li>
                            </ul>
                        </div>

                        {menu === "profile" ? (
                            <UserProfile />
                        ) :
                            <SettingsChangePassword />
                        }
                    </div>
                </div>
            </div>
        </Dashboard>
    );
};

export default SettingsPage;
