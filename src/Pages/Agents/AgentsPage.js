import React, { useEffect, useState } from "react";
// Icons
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import { MdAdd } from 'react-icons/md'
import { ImSearch } from "react-icons/im";
// Components
import RatingCard from "../../Components/RatingCard";
import Table from "../../Components/Table";
import Dashboard from "../../Components/Dashboard";
import FilterOrdersDropdown from "../../Components/FilterOrdersDropdown";
// Data
import agent from "../../mockData/agents.json";
// Helpers
import { filterAgents } from "../../helpers/filterAgents";
import AgentActionModal from "../../Components/AgentActionModal";

const AgentsPage = () => {
    const [show, setShow] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);
    const [selectedAgent, setSelectedAgent] = useState(null);
    const [modalAction, setModalAction] = useState('');
    const [itemStatus, setItemStatus] = useState("New");
    const [agents, setAgents] = useState(agent);

    const [filter, setFilter] = useState("All");
    const [agentSearch, setOrderSearch] = useState("");

    const handleOrderSearch = (e) => setOrderSearch(e.target.value);

    useEffect(() => setAgents(filterAgents(agent, agentSearch, filter)), [agentSearch, filter]);

    return (
        <Dashboard title="Agents">
            <div className="main-container">
                <div className="px-md-4 px-2 pb-4 mt-4">
                    <div className="total-rating-container">
                        <div className="row px-4 py-4">
                            <div className="col-lg-3 px-md-3">
                                <RatingCard
                                    title="Total Agents"
                                    total="400"
                                    rating="+51%"
                                    desc="Analytics for last 30 days"
                                />
                            </div>
                            <div className="col-lg-3 px-md-3 mt-lg-0 mt-4">
                                <RatingCard
                                    title="Available Agents"
                                    total="40"
                                    rating="+51%"
                                    desc="Analytics for last 30 days"
                                />
                            </div>
                            <div className="col-lg-3 px-md-3 mt-lg-0 mt-4">
                                <RatingCard
                                    title="Working Agents"
                                    total="120"
                                    rating="+51%"
                                    desc="Analytics for last 30 days"
                                />
                            </div>
                            <div className="col-lg-3 px-md-3 mt-lg-0 mt-4">
                                <RatingCard
                                    title="Unavailable"
                                    total="28"
                                    rating="+51%"
                                    desc="Analytics for last 30 days"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="px-md-4 px-2 mb-4">
                    <div className="orders-container py-4 ">
                        <div className="d-md-flex justify-content-between px-4 align-items-center">
                            <div className="d-md-flex">
                                <FilterOrdersDropdown setFilter={setFilter} page="agents" />

                                <div className="orders-orderSearch-input mt-md-0 mb-3 mb-md-0">
                                    <span><ImSearch size={15} color="#A3A3C2" /></span>
                                    <input type="text" placeholder="Search agents" value={agentSearch} onChange={handleOrderSearch} />
                                </div>
                            </div>
                            <div>
                                <button
                                    className="filter-btn d-flex justify-content-between align-items-center"
                                    onClick={() => {
                                        setModalAction('Add');
                                        setShow(true);
                                    }}
                                >
                                    <MdAdd color="#FFF" fontWeight={700} size={24} />&nbsp;Add Agent
                                </button>
                            </div>
                        </div>
                        <div className="order-list-container mt-4 table-responsive">
                            <Table
                                items={agents}
                                page="agents"
                                setShow={setShow}
                                setItemStatus={setItemStatus}
                                showDropdown={showDropdown}
                                selected={selectedAgent}
                                setSelected={setSelectedAgent}
                                setShowDropdown={setShowDropdown}
                                setModalAction={setModalAction}
                            />
                        </div>
                        <div
                            className="order-pagination-container px-md-4 d-flex flex-md-row flex-column justify-content-between align-items-center">
                            <div className="my-2">Showing 9 of 290 agents</div>
                            <div className="d-md-flex">
                                <div className="d-flex align-items-center">
                                    <div className="order-prev">
                                        <BiChevronLeft />
                                    </div>
                                    <div className="order-page mx-2">
                                        <span className="active">1</span>
                                        <span>2</span>
                                        <span>3</span>
                                        <span>...</span>
                                        <span>6</span>
                                    </div>
                                    <div className="order-next">
                                        <BiChevronRight />
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between px-1">
                                    <input type="text" placeholder="10" />
                                    <div>
                                        <div className="d-flex justify-content-center">
                                            <FaCaretUp />
                                        </div>

                                        <div className="d-flex justify-content-center">
                                            <FaCaretDown />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="px-md-4 px-2 mb-4"></div>

                <AgentActionModal show={show} setShow={setShow} action={modalAction} selected={selectedAgent}/>
            </div>
        </Dashboard>
    );
};

export default AgentsPage;
