import React, { useEffect, useState } from "react";
// Icons
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import { ImSearch } from "react-icons/im";
// Components
import RatingCard from "../../Components/RatingCard";
import Table from "../../Components/Table";
import Dashboard from "../../Components/Dashboard";
import FilterOrdersDropdown from "../../Components/FilterOrdersDropdown";
import FeedbackModal from "../../Components/FeedbackModal";
// Data
import feedback from "../../mockData/feedback.json";
// Helpers
import { filterFeedback } from "../../helpers/filterFeedback";


const FeedbackPage = () => {
    const [show, setShow] = useState(false);
    const [selectedOrder, setSelectedOrder] = useState(null);
    const [orders, setOrders] = useState(feedback);

    const [filter, setFilter] = useState("All");
    const [feedbackSearch, setFeedbackSearch] = useState("");

    const handleFeedbackSearch = (e) => setFeedbackSearch(e.target.value);

    useEffect(() => setOrders(filterFeedback(feedback, feedbackSearch, filter)), [feedbackSearch, filter]);

    return (
        <Dashboard title="Feedback">
            <div className="main-container">
                <div className="px-md-4 px-2 pb-4 mt-4">
                    <div className="total-rating-container">
                        <div className="row px-4 py-4">
                            <div className="col-lg-4 px-md-3">
                                <RatingCard
                                    title="Total Tickets"
                                    total="400"
                                    rating="+51%"
                                    desc="Analytics for last 30 days"
                                />
                            </div>
                            <div className="col-lg-4 px-md-3 mt-lg-0 mt-4">
                                <RatingCard
                                    title="Open Ticket"
                                    total="30"
                                    rating="+51%"
                                    desc="Analytics for last 30 days"
                                />
                            </div>
                            <div className="col-lg-4 px-md-3 mt-lg-0 mt-4">
                                <RatingCard
                                    title="Closed Ticket"
                                    total="370"
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
                                <FilterOrdersDropdown setFilter={setFilter} page="feedback" />

                                <div className="orders-orderSearch-input mt-md-0">
                                    <span><ImSearch size={15} color="#A3A3C2" /></span>
                                    <input type="text" placeholder="Search orders" value={feedbackSearch} onChange={handleFeedbackSearch} />
                                </div>
                            </div>
                        </div>
                        <div className="order-list-container mt-4 table-responsive">
                            <Table
                                items={orders}
                                page="feedback"
                                setShow={setShow}
                                selected={selectedOrder}
                                setSelected={setSelectedOrder}
                            />
                        </div>
                        <div
                            className="order-pagination-container px-md-4 d-flex flex-md-row flex-column justify-content-between align-items-center">
                            <div className="my-2">Showing 9 of 290 orders</div>
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
                {show &&
                <FeedbackModal show={show} setShow={setShow} selected={selectedOrder}/>
                }
            </div>
        </Dashboard>
    );
};

export default FeedbackPage;
