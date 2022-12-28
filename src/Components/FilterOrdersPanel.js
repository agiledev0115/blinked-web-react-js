import React from 'react';
// Assets
import { filterIcon } from "../assets/img";
// Components
import { Dropdown } from 'react-bootstrap';
import { CustomToggle } from './CustomToggle';
import { BiChevronDown } from "react-icons/bi";
import DateDropdown from './DateDropdown';

export default function FilterOrdersPanel({ setFilter, page, searchFromDate, setSearchFromDate, searchToDate, setSearchToDate }) {
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
            <Dropdown.Menu className="my-1 mx-2 p-4 dashboard-filter-order">
                <span>Order status</span>
                <Dropdown className="my-3">
                    <Dropdown.Toggle as={CustomToggle}>
                        <div className='input-box'>
                            <div>
                                <BiChevronDown size={25} color="#A3A3C2" />
                            </div>
                            <label>Select order status</label>
                        </div>
                    </Dropdown.Toggle>

                    <Dropdown.Menu className='dropdown-status'>
                        <Dropdown.Item href="#/action-1">New</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Pending</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Enroute Pickup</Dropdown.Item>
                        <Dropdown.Item href="#/action-4">Assigned</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <span className="d-inline-block mb-3">
                    Date period
                </span>
                
                <DateDropdown
                    fromDate={searchFromDate}
                    setFromDate={setSearchFromDate}
                    toDate={searchToDate}
                    setToDate={setSearchToDate}
                />
            </Dropdown.Menu>
        </Dropdown>
    )
};