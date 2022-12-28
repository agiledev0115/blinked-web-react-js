import React, { useState } from 'react'
import { Dropdown } from 'react-bootstrap'
import { CustomToggle } from './CustomToggle';
import { notificationIcon, NoNotificationsIcon } from "../assets/img";
import './NotificationDropdown.scss';

export default function NotificationDropdown() {
    const [notifications, setNotifications] = useState([]);

    return (
        <Dropdown className="notification-dropdown">
            <Dropdown.Toggle as={CustomToggle} id="dropdown-autoclose-true">
                <img src={notificationIcon} alt="Bell" className="bell" />
            </Dropdown.Toggle>
            {notifications.length > 0 ?
                <Dropdown.Menu className="body">
                    <Dropdown.Item>Notification 1</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item>Notification 2</Dropdown.Item>
                </Dropdown.Menu>
                :
                <Dropdown.Menu className="body">
                    <Dropdown.Header className="header">
                        <h4>Your notifications</h4>
                    </Dropdown.Header>
                    <img src={NoNotificationsIcon} alt="No notification" className="image"/>
                    <p className="text">You've no notifications  🎉</p>
                    <p className="subtext">When you have one, they will appear here</p>
                </Dropdown.Menu>
            }
        </Dropdown>
    )
}
