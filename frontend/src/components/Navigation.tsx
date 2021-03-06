import React, { useState } from 'react';
import { Link } from "react-router-dom";

import defaultAvatar from "../assets/bakuDefault.png";
import iconAddGroup from "../assets/icon/addGroup.svg";
import iconAddVenue from "../assets/icon/addVenue.svg";
import iconBands from "../assets/icon/bands.svg";
import iconSettings from "../assets/icon/settings.svg";
import iconVenues from "../assets/icon/venues.svg";

export default function Navigation() {
    const [navActive, setNavActive] = useState(false);
    const navLinks = [
        { id: 0, link: 'new_venue', label: 'New Venue', svg: iconAddVenue },
        { id: 1, link: 'new_band', label: 'New Band', svg: iconAddGroup },
        { id: 2, link: 'settings', label: 'User Settings', svg: iconSettings },
        { id: 3, link: '/venues', label: 'Venues List', svg: iconVenues },
        { id: 4, link: '/bands', label: 'Bands List', svg: iconBands },
    ];
    function toggleNav(){
        setNavActive(!navActive);
    }

    return (
        <nav className="relative">
            <button className="block" onClick={toggleNav}><img src={defaultAvatar} alt="TODO: Avatar" className="w-16 h-16 overflow-hidden rounded-full border-zinc-900 border-2" /></button>
            <ul className={"fixed right-6 z-40 bg-white rounded-lg shadow p-1 grid gap-1 transition-all ease-out top-24 " + (navActive ? 'block' : 'hidden')}>
                {navLinks.map((item) => <li key={item.id} onClick={toggleNav}><Link to={item.link}><img src={item.svg} alt={item.label} className="w-10" /></Link></li>)}
            </ul>
        </nav>
    );
}