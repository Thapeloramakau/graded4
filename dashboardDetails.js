import React, { createContext, useState } from 'react';

// Create the context
export const DashboardContent = createContext();

export const DashboardProvider = ({ children }) => {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');

    return (
        <DashboardContent.Provider value={{ name, surname, setName, setSurname }}>
            {children}
        </DashboardContent.Provider>
    );
};