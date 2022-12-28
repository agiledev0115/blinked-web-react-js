import React, { useState } from "react";
// Icons
import { BsGridFill } from "react-icons/bs";
import { FcMenu } from "react-icons/fc";
import { GoChevronDown } from "react-icons/go";
import { ImSearch } from "react-icons/im";
// Components
import { Dropdown } from "react-bootstrap";
import RatingCard from "../../Components/RatingCard";
import PendingOrder from "../../Components/PendingOrder";
import MapComponent from "../../Components/Map";
import Table from "../../Components/Table";
import Dashboard from "../../Components/Dashboard";
import { CustomToggle } from "../../Components/CustomToggle";
import DateDropdown from "../../Components/DateDropdown";
// Data
import order from "../../mockData/pending_order.json";
// Assets
import { orderEmpty } from "../../assets/img";
// Helpers
import OrderDetailsModal from "../../Components/OrderDetailsModal";
import FilterOrdersPanel from "../../Components/FilterOrdersPanel";

const HomePage = () => {
    // const ref = useRef(null);
    const [activeView, setActiveView] = useState("grid");
    // const [showInfoWindow, setShowInfoWinidow] = useState(false);
    const [show, setShow] = useState(false);
    const [selected, setSelected] = useState(null)
    // const [target, setTarget] = useState(null);
    // const [selectPlace, setSelectPlace] = useState({});
    const from = new Date()
    from.setMonth(new Date().getMonth() - 1)
    const [fromDate, setFromDate] = useState(from)
    const [toDate, setToDate] = useState(new Date())
    const [orders, setOrders] = useState(order)
    const [search, setSearch] = useState("")
    const [status, setStatus] = useState("All")
    const [searchFromDate, setSearchFromDate] = useState(from)
    const [searchToDate, setSearchToDate] = useState(new Date())
    // const []

    const handleSearch = (event) => {
        event.preventDefault();
        setSearch(event.target.value);
    };

    // const handleClick = (event) => {
    //   setShow(!show);
    //   setTarget(event.target);
    // };

    // const handleMouseOver = (e) => {
    //   setShowInfoWindow(true);
    //   console.log("enter");
    // };

    // const handleMouseExit = (e) => {
    //   setShowInfoWindow(false);
    //   console.log("exit");
    // };

    // const handleClickMarker = () => {
    //   setShowInfoWindow(!showInfoWindow);
    // };

    return (
        <Dashboard title="Home">
            <div className="main-container">
                <div className="dashboard-subcontainer px-md-4 px-2 mt-4">
                    <div className="dashboard-title-container">
                        <div className="dashboard-title"> Welcome back, Assurance 🌤</div>
                        <div className="dashboard-subtitle mt-2">
                            <div className="tag-line">
                                Here is what's happening with your business today!
                            </div>
                            <DateDropdown
                                fromDate={fromDate}
                                setFromDate={setFromDate}
                                toDate={toDate}
                                setToDate={setToDate}
                            />
                        </div>
                    </div>
                </div>

                <div className="px-md-4 px-2 pt-4 pb-4">
                    <div className="total-rating-container">
                        <div className="row px-md-4 px-2 py-4">
                            <div className="col-lg-4 px-md-3">
                                <RatingCard
                                    title="Total Orders"
                                    total="32,400"
                                    rating="+51%"
                                    desc="Analytics for last 30 days"
                                />
                            </div>
                            <div className="col-lg-4 px-md-3 mt-md-0 mt-4">
                                <RatingCard
                                    title="Transactions"
                                    total="32,400"
                                    rating="+51%"
                                    desc="Analytics for last 30 days"
                                />
                            </div>
                            <div className="col-lg-4 px-md-3 mt-md-0 mt-4">
                                <RatingCard
                                    title="Performance"
                                    total="32,400"
                                    rating="+51%"
                                    desc="Analytics for last 30 days"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="px-md-4 px-2 pb-4">
                    <div className="home-pending-orders-container p-md-4 p-2">
                        <div className="d-md-flex justify-content-between">
                            <Dropdown className="d-inline mx-2 border-0">
                                <Dropdown.Toggle as={CustomToggle} id="dropdown-autoclose-true">
                                    <div className="home-pending-orders-title">
                                        <span>Pending Orders (0)</span>
                                        <span><GoChevronDown /></span>
                                    </div>
                                </Dropdown.Toggle>

                                <Dropdown.Menu className="p-2">
                                    <Dropdown.Item className="drop-menu-item py-3">
                                        Pending Orders (0)
                                    </Dropdown.Item>
                                    <Dropdown.Item className="drop-menu-item py-3">
                                        New Orders (0)
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            <div className="d-md-flex">
                                <div className="home-pending-search-input mt-3 mt-md-0 mb-2 mb-md-0">
                                    <span>
                                        <ImSearch size={15} color="#A3A3C2" />
                                    </span>
                                    <input type="text" placeholder="Search orders e.g, ID" value={search} onChange={handleSearch} />
                                </div>
                                {/* <div className="home-pending-filter-oders mt-3 mt-md-0 mb-2 mb-md-0">
                                    <FilterOrdersPanel setStatus={setStatus} setSearchFromDate={setSearchFromDate} setSearchToDate={setSearchToDate} page="orders"/>
                                </div> */}
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="home-pending-vertical mx-3 d-md-block d-none" />
                                    <div className="d-flex">
                                        <div
                                            className={
                                                activeView === "grid"
                                                    ? "home-pending-order-grid-view active"
                                                    : "home-pending-order-grid-view"
                                            }
                                            onClick={() => setActiveView("grid")}
                                        >
                                            <BsGridFill color="#0F112B" size={20} />
                                        </div>
                                        <div
                                            className={
                                                activeView === "list"
                                                    ? "home-pending-order-list-view active"
                                                    : "home-pending-order-list-view"
                                            }
                                            onClick={() => setActiveView("list")}
                                        >
                                            <FcMenu size={22} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {activeView === "grid" ? (
                            <div className="home-pending-order-grid-container">
                                {orders.length > 0 ? (
                                    <div className="row">
                                        {orders.filter(order => order.status === 'New').map((item, i) => (
                                            <div className="col-lg-4 mt-3" key={i}>
                                                <PendingOrder item={item} setShow={setShow} setSelected={setSelected}/>
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    <div className="row py-3">
                                        <div className="col-12 py-5 home-pending-order-empty">
                                            <div>
                                                <img
                                                    src={orderEmpty}
                                                    alt="No Order"
                                                    className="img-fluid"
                                                />
                                            </div>
                                            <div className="mt-3">You have no pending orders yet!</div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ) : (
                            <div className="home-pending-order-list-container">
                                <Table items={orders.filter(order => order.status === 'New')} page="home" setShow={setShow} setSelected={setSelected} />
                            </div>
                        )}
                        <div className="home-pending-order-loadmore-btn mt-5 mb-3">
                            <button>Load more orders</button>
                        </div>
                    </div>
                </div>

                <MapComponent />

                <OrderDetailsModal show={show} setShow={setShow} itemStatus="New" />
            </div>
        </Dashboard>
    );
};

export default HomePage;
