import React, { useState } from 'react';
import { Dropdown } from 'react-bootstrap';
import { CustomToggle } from './CustomToggle';
import { GoChevronDown } from "react-icons/go";
import { calenderIcon } from "../assets/img";
import { DateRangePicker } from 'react-date-range';

export default function DateDropdown({ fromDate, setFromDate, toDate, setToDate }) {
    const lastMoth = new Date();
    lastMoth.setDate(lastMoth.getDate() - 28);
    const [title, setTitle] = useState('Last 28 days');
    const [range, setRange] = useState(`${lastMoth.toDateString().substring(4)} - ${new Date().toDateString().substring(4)}`);
    const [isCustom, setIsCustom] = useState(false);

    return (
        <Dropdown className="d-inline mx-2 border-0 clearfix" alignRight={true}>
            <Dropdown.Toggle as={CustomToggle} id="dropdown-autoclose-true">
                <div className="dashboard-date mt-md-0 mt-4 shadow-sm">
                    <div className="d-flex align-items-center">
                        <img
                            src={calenderIcon}
                            alt="Calender"
                            className="img-fluid"
                        />
                        <div className="mx-2">{range}</div>
                    </div>
                    <div>
                        <GoChevronDown size={18} />
                    </div>
                </div>
            </Dropdown.Toggle>
            {!isCustom ?
                <Dropdown.Menu className="p-2 drop-menu-date">
                    <Dropdown.Item className="drop-menu-item">
                        <div className="drop--menu-date-item">
                            <span>{title}</span>
                            <span>{range}</span>
                        </div>
                    </Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item className="drop-menu-item" onClick={() => {
                        setTitle('Today');
                        setRange(new Date().toDateString().substring(4));
                    }}>
                        Today
                    </Dropdown.Item>
                    <Dropdown.Item className="drop-menu-item" onClick={() => {
                        const lastWeek = new Date();
                        lastWeek.setDate(lastWeek.getDate() - 7);
                        setRange(`${lastWeek.toDateString().substring(4)} - ${new Date().toDateString().substring(4)}`);
                        setTitle('Last 7 days');
                    }}>
                        Last 7 days
                    </Dropdown.Item>
                    <Dropdown.Item className="drop-menu-item" onClick={() => {
                        const lastMoth = new Date();
                        lastMoth.setDate(lastMoth.getDate() - 28);
                        setRange(`${lastMoth.toDateString().substring(4)} - ${new Date().toDateString().substring(4)}`);
                        setTitle('Last 28 days');
                    }}>
                        Last 28 days
                    </Dropdown.Item>
                    <Dropdown.Item className="drop-menu-item" onClick={() => {
                        const last90Days = new Date();
                        last90Days.setDate(last90Days.getDate() - 90);
                        setRange(`${last90Days.toDateString().substring(4)} - ${new Date().toDateString().substring(4)}`);
                        setTitle('Last 7 days');
                    }}>
                        Last 90 days
                    </Dropdown.Item>
                    <p
                        className="drop-menu-item"
                        onClick={(e) => {
                            e.preventDefault()
                            setIsCustom(true);
                            setTitle('Custom')
                        }}>
                        Customize
                    </p>
                </Dropdown.Menu>
                :
                <Dropdown.Menu className="p-2">
                    <DateRangePicker
                        ranges={[{ startDate: fromDate, endDate: toDate, color: '#3842b0' }]}
                        focusedRange={[0, 0]}
                        weekStartsOn={1}
                        onChange={e => {
                            setFromDate(e.range1.startDate);
                            setToDate(e.range1.endDate);
                            setRange(`${e.range1.startDate.toDateString().substring(4)} - ${e.range1.endDate.toDateString().substring(4)}`);
                            setIsCustom(false)
                        }} />
                </Dropdown.Menu>
            }
        </Dropdown>
    )
}
