import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom'

let pageNames = ['home', 'blog', 'work']
pageNames = pageNames.reverse()

export default function Header() {
    let pathname = useLocation().pathname
    if (pathname == '' || pathname == '/') {
        pathname = 'home'
    }
    let pages = [];
    for (let i = 0; i < pageNames.length; ++i) {
        let style = "";
        if (pathname.endsWith(pageNames[i])) {
            style = "border-gray-800 border-b-4 pb-2"
        }
        pages.push(<Link to={pageNames[i] == "home"? "/": pageNames[i]} className={style} key={i}>{pageNames[i]}</Link>)
    }

    return (
        <div className="flex p-8 text-2xl">
            <span className="border-gray-800 border-b-8 pb-2">Nethish Rajendran</span>

            <div className="flex flex-auto flex-row-reverse gap-8">
                {pages}
            </div>

        </div>

    );
}