import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { setAuth } from '../features/authSlice';

export default function UserRegistration() {
    const createUserApiUrl = process.env.REACT_APP_AJAX_URL + `/users`;
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    function handleUsernameChange(e: any) {
        setUsername(e.target.value);
    }
    function handleEmailChange(e: any) {
        setEmail(e.target.value);
    }
    function handlePasswordChange(e: any) {
        setPassword(e.target.value);
    }

    function handleSubmit(e: any) {
        e.preventDefault();
        const getData = async () => {
            try {
                const response = await fetch(
                    createUserApiUrl,
                    {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                            username: username,
                            email: email,
                            password: password
                        })
                    }
                );

                if (!response.ok) {
                    throw new Error(
                        `This is an HTTP error: The status is ${response.status}`
                    );
                }
                let actualData = await response.json();
                setData(actualData);
                setError(null);
                if (actualData.token) {
                    dispatch(setAuth(true));
                    navigate("/", { replace: true });
                }
            } catch (err: any) {
                setError(err.message);
                setData(null);
            }
        }
        getData();
    }

    return (
        <div className='bg-zinc-400 h-screen pt-20'>
            <form onSubmit={handleSubmit} className='p-10 w-2/3 mx-auto bg-white rounded-md border border-zinc-900 shadow grid gap-4'>
                <h2 className='font-bold text-gray-700 text-lg'>Register</h2>
                <div>
                    <label htmlFor='username' className="block text-sm font-medium text-gray-700">Username</label>
                    <input
                        className='mt-1 p-2 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300'
                        value={username}
                        onChange={handleUsernameChange}
                        type="text"
                        name="username"
                        id="username" />
                </div>
                <div>
                    <label htmlFor='email' className="block text-sm font-medium text-gray-700">Email Address</label>
                    <input
                        className='mt-1 p-2 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300'
                        value={email}
                        onChange={handleEmailChange}
                        type="text"
                        name="email"
                        id="email" />
                </div>
                <div>
                    <label htmlFor='email' className="block text-sm font-medium text-gray-700">Password</label>
                    <input
                        className='mt-1 p-2 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300'
                        value={password}
                        onChange={handlePasswordChange}
                        type="password"
                        name="password"
                        id="password" />
                </div>
                <div className='flex'>
                    <input type="submit" value="Submit" className='ml-auto justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500' />
                </div>
            </form>
        </div>
    );
}
