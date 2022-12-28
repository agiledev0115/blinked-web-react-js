import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import { GoChevronDown } from "react-icons/go";
import { CgMenuLeftAlt } from "react-icons/cg";
import { ImSearch } from "react-icons/im";
import { Dropdown } from "react-bootstrap";

import { notificationIcon } from "../assets/img";
import NotificationDropdown from "./NotificationDropdown";
import SearchModal from "../Components/SearchModal";

const Header = ({ handleSideBar, title }) => {
    const [show, setShow] = useState(false);
    const history = useHistory();

    const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
        <span ref={ref}
            onClick={(e) => {
                e.preventDefault();
                onClick(e);
            }}
        >
            {children}
        </span>
    ));

    const handleLogout = () => {
        localStorage.removeItem('accessToken');
        history.push('/');
    }

    const showSearchModal = () => {
        setShow(true);
    }

    return (
        <div className="dashboard-header-main px-md-4 px-2">
            <div className="dashboard-header-path">
                <span onClick={handleSideBar} className="d-flex d-md-none">
                    <CgMenuLeftAlt size={28} />
                </span>
                <span className="mx-2 ">
                    {title}
                </span>
            </div>
            <div className="dashboard-header-account">
                <div className="dashboard-header-search" onClick={showSearchModal}>
                    <ImSearch className="search-icon mx-2" size={20} />
                    <span>Search</span>
                </div>
                <div className="dashboard-header-notification">
                    <NotificationDropdown />
                    {/* <img src={notificationIcon} alt="Bell" className="img-fluid" /> */}
                </div>
                <Dropdown className="d-inline mx-2 border-0">
                    <Dropdown.Toggle as={CustomToggle} id="dropdown-autoclose-true">
                        <div className="dashboard-header-ac-section">
                            <div className="dashboard-header-ac">
                                <div className="dashboard-header-ac-icon">BL</div>
                                <div className="dashboard-header-ac-name d-flex align-items-center">
                                    <span className="d-none d-md-flex">Bamboo Lounge</span>
                                    <GoChevronDown size={18} />
                                </div>
                            </div>
                        </div>
                    </Dropdown.Toggle>

                    <Dropdown.Menu className="p-1">
                        <Dropdown.Item className="drop-home-profile py-3">
                            <div className="dashboard-header-ac-icon">BL</div>
                            <div>
                                <span>Bamboo Lounge</span>
                                <span>Sales manager</span>
                            </div>
                        </Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item className="drop-menu-item" onClick={() => history.push('/settings')}>Profile</Dropdown.Item>
                        <Dropdown.Item className="drop-menu-item" onClick={() => history.push('/settings')}>Support</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item className="drop-menu-item logout" onClick={handleLogout}>
                            Logout
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>

            {show &&
                <SearchModal show={show} setShow={setShow}/>
            }
        </div>
    );
};

export default Header;
