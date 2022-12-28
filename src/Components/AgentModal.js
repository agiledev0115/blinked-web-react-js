import React from "react";
import { location } from "../assets/img";
import { getAgentStyle } from "../helpers/getRowStyles";

export const AgentModal = ({ item, onClick }) => {
    return (
        <li className="d-md-flex justify-content-between" onClick={onClick}>
            <div className="d-flex align-items-center">
                <div className="order-agent-logo">GO</div>
                <div className="order-agent-name-loc">
                    <span>{item.agentName}</span>
                    <span className="my-1">
                        <img src={location} alt="" />
                        <span className="mx-1">{item.location}</span>
                    </span>
                    <div className="rounded-pill d-md-none d-flex">
                        <span
                            className="order-modal-agent-status rounded-pill px-3  d-md-flex d-none"
                            style={getAgentStyle(item.status)}
                        >
                            {item.status}
                        </span>
                    </div>
                </div>
            </div>
            <div className="d-flex align-items-center">
                <span
                    className="order-modal-agent-status rounded-pill px-3  d-md-flex d-none"
                    style={getAgentStyle(item.status)}
                >
                    {item.status}
                </span>
            </div>
        </li>
    )
}