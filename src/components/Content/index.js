import React, { useState, useContext } from 'react';
import "./css/index.css"
import All from '../All';
import Home from "../Home";
import {Context} from "../../context/navContext";

function Content() {
    const {currentNavItem, setCurrentNavItem} = useContext(Context);
    console.log("currentNavItem____", currentNavItem);

    return (
        <div className="content">
            <All type={currentNavItem}/>
        </div>
    );
}
export default Content;