import React, { createContext } from 'react';



export const ElectroContext = createContext(null);
const Context = ({ children }) => {
    const data = {
        MyName: 'test'
    }
    return (
        <ElectroContext.Provider value={data} >
            {children}
        </ElectroContext.Provider>
    );
};

export default Context;