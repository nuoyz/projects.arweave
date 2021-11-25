import React, { useState, useContext } from 'react';
import {Context} from "../../context/navContext";
import projectData from "../../common/data"
import "./css/index.css";


function Nav() {
    const {currentNavItem, setCurrentNavItem} = useContext(Context);
    const [isSelectShow, setSelectShow] = useState(true);

    const itemList = Object.keys(projectData).map((value, index) => {
        return value
    });

    const onSelect = () => {
        // if (isSelectShow) {
        //     setSelectShow(false);
        // } else {
        //     setCurrentNavItem("all");
        //     setSelectShow(true);
        // }
    };

    const onSubItemSelect = (subItem) => {
        console.log("subItem___", subItem);
        setCurrentNavItem(subItem);
    }

    const onNavItemClick = (item) => {
    }

    return (
        <div className="nav">
            <div className="logo">
                <img src="https://www.arweave.org/nav-logo.svg" alt="Logo" />
            </div>
            <div className="projects-list">
                {/* <div>
                    <ul>
                        <li
                            onClick={() => {
                                onNavItemClick("home")
                            }}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                            </svg><span>Home</span>
                        </li>
                    </ul>
                </div> */}
                <div className="projects-all" onClick={onSelect}>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 project-left-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                    </svg>
                    <p>Project</p>
                    {!isSelectShow && (<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 select-option" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                    </svg>)}
                    {isSelectShow &&(<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 select-option" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>)}
                </div>
                {isSelectShow &&<ul className="projects-sub">
                    <div className="collapse">
                        <li onClick={() => onSubItemSelect("all")}><span>All</span></li>
                        {Object.keys(projectData).map((value, index) => {
                            return (
                                <li
                                    key={index}
                                    onClick={() => onSubItemSelect(value)}
                                >
                                    <span>{value}</span>
                                </li>
                            )
                        })}
                    </div>
                </ul>}
            </div>
        </div>
    );
}
export default Nav;