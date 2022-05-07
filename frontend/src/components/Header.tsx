import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';

import festyWiseLogo from "../assets/festyWiseLogo.png";
import defaultAvatar from "../assets/bakuDefault.png";

export default function Header() {
    const authorized = useSelector((state: any) => state.auth.authorized);

    return (
        <header className="py-2 px-4 flex items-center">
            <div>
                <Link to="/"><img src={festyWiseLogo} alt="TODO: Logo" className="w-40" /></Link>
            </div>

            <nav className="ml-auto">
                <ul className="flex">
                    <li className="mr-5"><Link to="new_venue" className="bg-zinc-300 border-zinc-900 border-2 font-bold px-4 py-2 rounded">Host</Link></li>
                    <li><Link to="new_band" className="bg-zinc-300 border-zinc-900 border-2 font-bold px-4 py-2 rounded">Perform</Link></li>
                </ul>
            </nav>

            <div className="ml-20">
                {authorized
                    ? <Link to="settings"><img src={defaultAvatar} alt="TODO: Avatar" className="w-16 h-16 overflow-hidden rounded-full border-zinc-900 border-2" /></Link>
                    : <div><Link to="login" className="bg-zinc-300 border-zinc-900 border-2 font-bold px-4 py-2 rounded">Login</Link><Link to="register" className="ml-5 bg-zinc-300 border-zinc-900 border-2 font-bold px-4 py-2 rounded">Register</Link></div>
                }

            </div>
        </header>
    );
};