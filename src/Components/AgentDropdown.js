import React from 'react'
import { Dropdown } from 'react-bootstrap'

export default function AgentDropdown({ setShow, setModalAction, setShowDropdown }) {
    const handleClick = (action) => {
        setShow(true);
        setShowDropdown(false);
        setModalAction(action)
    };

    return (
        <div className="agent-dropdown">
            <Dropdown.Item className="drop-menu-item py-3" onClick={() => handleClick('Edit')} style={{color: '#3842b0'}}>
                Edit Agent
            </Dropdown.Item>
            <Dropdown.Item className="drop-menu-item py-3" onClick={() => handleClick('Suspend')}>
                Suspend Agent
            </Dropdown.Item>
            <Dropdown.Item className="drop-menu-item py-3" onClick={() => handleClick('Remove')} style={{color: '#F00'}}>
                Remove Agent
            </Dropdown.Item>
        </div>
    )
}
