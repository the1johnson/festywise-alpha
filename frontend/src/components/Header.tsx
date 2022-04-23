import * as React from "react";
import { Link } from "react-router-dom";

import festyWiseLogo from "../assets/festyWiseLogo.png";
import defaultAvatar from "../assets/bakuDefault.png";

export default function Header() {
    return (
        <header className="py-2 px-4 flex items-center">
            <div>
                <Link to="/"><img src={festyWiseLogo} alt="TODO: Logo" className="w-40" /></Link>
            </div>

            <nav className="ml-auto">
                <ul className="flex">
                    <li className="mr-5"><Link to="venue" className="bg-zinc-300 border-zinc-900 border-2 font-bold px-4 py-2 rounded">Host</Link></li>
                    <li><Link to="artist" className="bg-zinc-300 border-zinc-900 border-2 font-bold px-4 py-2 rounded">Perform</Link></li>
                </ul>
            </nav>

            <div className="ml-20">
                <img src={defaultAvatar} alt="TODO: Avatar" className="w-16 h-16 overflow-hidden rounded-full border-zinc-900 border-2" />
            </div>

        </header>
    );
};