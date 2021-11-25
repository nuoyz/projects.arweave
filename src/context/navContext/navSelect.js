import React, { createContext, useEffect, useState } from 'react'

export const Context = createContext({})

const NavSelectContext = ({ children, defaultNavItem }) => {
    const [currentNavItem, setCurrentNavItem] = useState(defaultNavItem);

    console.log("currentMarket____", currentNavItem);

    return <Context.Provider value={{ currentNavItem, setCurrentNavItem }}>{children}</Context.Provider>
}

export default NavSelectContext
