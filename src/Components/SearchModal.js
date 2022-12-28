import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { MdClose } from 'react-icons/md';
import { AvatarPlaceholder } from '../assets/img/index';
import { getOrderStyle } from '../helpers/getRowStyles';
import moment from 'moment';
import { History } from "../assets/img";

import { ImSearch } from "react-icons/im";

export default function FeedbackModal({ show, setShow }) {

    const handleClose = () => {
        setShow(false);
    }

    return (
        <Modal show={show} onHide={handleClose} centered size="lg" className='dashboard-search'>
            <div className="dashboard-search-input m-0 ">
                <span><ImSearch size={20} color="#A3A3C2" /></span>
                <input type="text" placeholder="Search Anything..." />
            </div>
            <div className='my-4 mx-2 dashboard-search-history'>
                <span className='mx-1'>RECENT SEARCHES</span>
                <ul className='mt-2'>
                    <li className='p-1 pr-0'>
                        <img src={History} alt="history" />
                        <span className='mx-3'>Form Builder - 23 hours on-demand video</span>
                    </li>
                    <li className='p-1 pr-0'>
                        <img src={History} alt="history" />
                        <span className='mx-3'>Access Mosaic on mobile and TV</span>
                    </li>
                    <li className='p-1 pr-0'>
                        <img src={History} alt="history" />
                        <span className='mx-3'>Product Update - Q4 2021</span>
                    </li>
                    <li className='p-1 pr-0'>
                        <img src={History} alt="history" />
                        <span className='mx-3'>Master Digital Marketing Strategy course</span>
                    </li>
                    <li className='p-1 pr-0'>
                        <img src={History} alt="history" />
                        <span className='mx-3'>Dedicated forms for products</span>
                    </li>
                    <li className='p-1 pr-0'>
                        <img src={History} alt="history" />
                        <span className='mx-3'>Product Update - Q4 2021</span>
                    </li>
                </ul>
            </div>
        </Modal>
    )
};