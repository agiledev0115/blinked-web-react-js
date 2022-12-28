import React, { createContext, useState } from 'react';

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
    const [toastData, setToastData] = useState({ open: false, text: "", color: '#E6FFEB' });
    const [loading, setLoading] = useState(false);

    return <GlobalContext.Provider value={{ toastData, setToastData, loading, setLoading }}>
        {children}
    </GlobalContext.Provider>
};