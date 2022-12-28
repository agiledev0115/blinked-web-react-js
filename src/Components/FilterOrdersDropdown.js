import React from 'react';
// Assets
import { filterIcon } from "../assets/img";
// Components
import { Dropdown } from 'react-bootstrap';
import { CustomToggle } from './CustomToggle';

export default function FilterOrdersDropdown({ setFilter, page }) {
    return (
        <Dropdown className="filter my-3 my-md-0" >
            <Dropdown.Toggle as={CustomToggle} id="dropdown-autoclose-true">
                <div className="filter my-3 my-md-0">
                    <button className="px-4">
                        <img src={filterIcon} alt="" className="img-fluid" />
                        <span>{`Filter ${page}`}</span>
                    </button>
                </div>
            </Dropdown.Toggle>
            {page === 'agents' &&
                <Dropdown.Menu className="p-2">
                    <Dropdown.Item className="drop-menu-item py-3" onClick={() => setFilter('All')}>
                        All
                    </Dropdown.Item>
                    <Dropdown.Item className="drop-menu-item py-3" onClick={() => setFilter('Working')}>
                        Working
                    </Dropdown.Item>
                    <Dropdown.Item className="drop-menu-item py-3" onClick={() => setFilter('Available')}>
                        Available
                    </Dropdown.Item>
                    <Dropdown.Item className="drop-menu-item py-3" onClick={() => setFilter('Unavailble')}>
                        Unavailable
                    </Dropdown.Item>
                </Dropdown.Menu>
            }
            {page === 'feedback' &&
                <Dropdown.Menu className="p-2">
                    <Dropdown.Item className="drop-menu-item py-3" onClick={() => setFilter('All')}>
                        All
                    </Dropdown.Item>
                    <Dropdown.Item className="drop-menu-item py-3" onClick={() => setFilter('Pending')}>
                        Pending
                    </Dropdown.Item>
                    <Dropdown.Item className="drop-menu-item py-3" onClick={() => setFilter('Resolved')}>
                        Resolved
                    </Dropdown.Item>
                </Dropdown.Menu>
            }
            {page === 'orders' &&
                <Dropdown.Menu className="p-2">
                    <Dropdown.Item className="drop-menu-item py-3" onClick={() => setFilter('All')}>
                        All
                    </Dropdown.Item>
                    <Dropdown.Item className="drop-menu-item py-3" onClick={() => setFilter('New')}>
                        New
                    </Dropdown.Item>
                    <Dropdown.Item className="drop-menu-item py-3" onClick={() => setFilter('Pending')}>
                        Pending
                    </Dropdown.Item>
                    <Dropdown.Item className="drop-menu-item py-3" onClick={() => setFilter('Enroute pickup')}>
                        Enroute Pickup
                    </Dropdown.Item>
                    <Dropdown.Item className="drop-menu-item py-3" onClick={() => setFilter('Enroute dropoff')}>
                        Enroute Dropoff
                    </Dropdown.Item>
                    <Dropdown.Item className="drop-menu-item py-3" onClick={() => setFilter('Canceled')}>
                        Canceled
                    </Dropdown.Item>
                    <Dropdown.Item className="drop-menu-item py-3" onClick={() => setFilter('Assigned')}>
                        Assigned
                    </Dropdown.Item>
                    <Dropdown.Item className="drop-menu-item py-3" onClick={() => setFilter('Delivered')}>
                        Delivered
                    </Dropdown.Item>
                </Dropdown.Menu>
            }
        </Dropdown>
    )
};