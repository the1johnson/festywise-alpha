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
                <Link to="/"><img src={festyWiseLogo} alt="Festywise Wizard Logo" className="w-40" /></Link>
            </div>

            <div className="ml-auto">
                {authorized
                    ? <Navigation />
                    : <div className="font-fenwick">
                        <Link to="register">Register</Link>
                        <Link to="login" className="ml-8 border-blue-500 text-blue-500 rounded border-2 py-1 px-2">Login</Link>
                    </div>
                }
            </div>
        </header>
    );
};