import React, { useState } from "react";
import projectData from "../../common/data";
import "./css/index.css";
import Item from "../Item";

function All({type}) {
    let list = []
    Object.values(projectData).filter((projectValue) => {
        if (type === "all") {
            return true;
        }

        return projectValue.key === type;
    }).forEach((value, index) => {
        return value.list.forEach((item) => {
            list.push(item);
        });
    });

    console.log("type____")

    return (
        <div className="all">
            <div className="title">{type === "all" ? "All" : projectData[type].name}</div>
            <div className="table">
                <div class="flex flex-col">
                    <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                            <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                                <table class="min-w-full divide-y divide-gray-200">
                                    <thead class="bg-gray-50">
                                        <tr>
                                            <th
                                                scope="col"
                                                class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                            >
                                                Project
                                            </th>
                                            {/* <th
                                                scope="col"
                                                class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                            >
                                                Token
                                            </th> */}
                                            <th
                                                scope="col"
                                                class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                            >
                                                Tags
                                            </th>
                                            <th
                                                scope="col"
                                                class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                            >
                                                Desc
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody class="bg-white divide-y divide-gray-200">
                                        {list.map((value, index) => {
                                            console.log("list_____value", value);
                                            return <Item key={index} {...value} />;
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default All;
