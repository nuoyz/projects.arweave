import React, { useState } from 'react';
import "./css/index.css"

function Item(props) {
    return (
        <tr>
            <td class="px-6 py-4 whitespace-nowrap">
                <div class="flex items-center">
                    <div class="flex-shrink-0 h-10 w-10">
                        <img class="border border-gray-300 border-solid rounded-full h-10 w-10" src={props.logo} alt=""/>
                    </div>
                    <div class="ml-4">
                        <div class="text-sm font-medium text-gray-900">
                            <a href={props.website} target="_blank" rel="noreferrer">{props.name}</a>
                        </div>
                        <div class="link-list text-sm text-gray-500">
                            <a href={props.github} target="_blank" rel="noreferrer noopener" class="list-item fields has-tooltip" data-original-title="null"><img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMiAuM0M1LjQuMyAwIDUuNyAwIDEyLjNjMCA1LjMgMy40IDkuOCA4LjIgMTEuNC42LjEuOC0uMy44LS42di0yYy0zLjMuNy00LTEuNi00LTEuNi0uNS0xLjQtMS4zLTEuOC0xLjMtMS44LTEuMi0uNyAwLS43IDAtLjcgMS4yLjEgMS44IDEuMiAxLjggMS4yIDEuMSAxLjggMi44IDEuMyAzLjUgMSAuMS0uOC40LTEuMy44LTEuNi0yLjctLjMtNS41LTEuMy01LjUtNS45IDAtMS4zLjUtMi40IDEuMi0zLjIgMC0uNC0uNS0xLjYuMi0zLjIgMCAwIDEtLjMgMy4zIDEuMiAxLS4zIDItLjQgMy0uNHMyIC4xIDMgLjRjMi4zLTEuNiAzLjMtMS4yIDMuMy0xLjIuNyAxLjcuMiAyLjkuMSAzLjIuOC44IDEuMiAxLjkgMS4yIDMuMiAwIDQuNi0yLjggNS42LTUuNSA1LjkuNC40LjggMS4xLjggMi4ydjMuM2MwIC4zLjIuNy44LjYgNC44LTEuNiA4LjItNi4xIDguMi0xMS40QzI0IDUuNyAxOC42LjMgMTIgLjN6IiBmaWxsPSJ2YXIoLS1tdXRlZCwjNjY2NjY2KSIvPjwvc3ZnPg==" alt="GitHub" class="icon"/></a>
                            <a href={props.twitter} target="_blank" rel="noreferrer noopener" class="list-item fields has-tooltip" data-original-title="null"><img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTI0IDQuNmMtLjkuNC0xLjguNy0yLjguOCAxLS42IDEuOC0xLjYgMi4yLTIuNy0xIC42LTIgMS0zLjEgMS4yLS45LTEtMi4yLTEuNi0zLjYtMS42LTIuNyAwLTQuOSAyLjItNC45IDQuOSAwIC40IDAgLjguMSAxLjEtNC4yLS4yLTcuOC0yLjItMTAuMi01LjItLjUuOC0uNyAxLjYtLjcgMi41IDAgMS43LjkgMy4yIDIuMiA0LjEtLjggMC0xLjYtLjItMi4yLS42di4xYzAgMi40IDEuNyA0LjQgMy45IDQuOC0uNC4xLS44LjItMS4zLjItLjMgMC0uNiAwLS45LS4xLjYgMiAyLjQgMy40IDQuNiAzLjQtMS43IDEuMy0zLjggMi4xLTYuMSAyLjEtLjQgMC0uOCAwLTEuMi0uMSAyLjIgMS40IDQuOCAyLjIgNy41IDIuMiA5LjEgMCAxNC03LjUgMTQtMTR2LS42YzEtLjcgMS44LTEuNiAyLjUtMi41eiIgZmlsbD0idmFyKC0tbXV0ZWQsIzY2NjY2NikiLz48L3N2Zz4=" alt="Twitter" class="icon"/></a>
                            <a href={props.chat} target="_blank" rel="noreferrer noopener" class="list-item fields has-tooltip" data-original-title="null"><img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTIwLjQgMTYuOEMyMiAxNS4yIDIzIDEzLjIgMjMgMTFjMC01LTQuOS05LTExLTlTMSA2IDEgMTFzNC45IDkgMTEgOWMxLjEgMCAyLjEtLjEgMy4xLS40TDIxIDIybC0uNi01LjJ6IiBzdHJva2U9InZhcigtLW11dGVkLCM2NjY2NjYpIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLWxpbmVjYXA9InNxdWFyZSIvPjwvc3ZnPg==" alt="Chat" class="icon"/></a>
                        </div>
                    </div>
                </div>
            </td>
            {/* <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm text-gray-900"></div>
            </td> */}
            <td class="px-6 py-4 whitespace-nowrap text-left">
                <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    {props.tag}
                </span>
            </td>
            <td class="px-6 py-4 text-left whitespace-nowrap text-sm text-gray-500">
                {props.desc}
            </td>
        </tr>
    );
}

export default Item;