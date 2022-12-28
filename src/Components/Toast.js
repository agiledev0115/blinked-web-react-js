import React, { useContext, useEffect } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { AlertImage1, AlertImage2 } from "../assets/img"
import './Toast.scss';

export default function Toast() {
    const { toastData: { open, text, color }, setToastData } = useContext(GlobalContext);

    useEffect(() => {
        if (open) {
            setTimeout(() => {
                setToastData({ open: false, text: "", color: '' })
            }, 3000);
        }
    }, [open])

    return (
        <div className={`toast ${open ? "open" : "closed"}`} style={{ backgroundColor: color }}>
            <div className="image-bg">
                <img src={AlertImage1}/>
                <img src={AlertImage2}/>
            </div>
            <p>{text}</p>
        </div>
    )
};