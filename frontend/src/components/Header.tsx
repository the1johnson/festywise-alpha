import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';

import Navigation from './Navigation';
import festyWiseLogo from "../assets/festyWiseLogo.png";

export default function Header() {
    const authorized = useSelector((state: any) => state.auth.authorized);

    return (
        <header className="py-2 px-4 flex items-center">
            <div>
                <Link to="/"><img src={festyWiseLogo} alt="TODO: Logo" className="w-40" /></Link>
            </div>

            <div className="ml-auto">
                {authorized
                    ? <Navigation />
                    : <div><Link to="login" className="bg-zinc-300 border-zinc-900 border-2 font-bold px-4 py-2 rounded">Login</Link><Link to="register" className="ml-5 bg-zinc-300 border-zinc-900 border-2 font-bold px-4 py-2 rounded">Register</Link></div>
                }

            </div>
        </header>
    );
};