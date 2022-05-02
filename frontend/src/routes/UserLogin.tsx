import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { setAuth } from '../features/authSlice';

export default function UserLogin() {
    const loginApiUrl = process.env.REACT_APP_AJAX_URL + `/login`;
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    function handleSubmit(e: any) {
        e.preventDefault();
        const getData = async () => {
            try {
                const response = await fetch(
                    loginApiUrl,
                    {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                            username: username,
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
    function handleUsernameChange(e: any) {
        setUsername(e.target.value);
    }

    function handlePasswordChange(e: any) {
        setPassword(e.target.value);
    }
    return (
        <>
            <div className='bg-zinc-400 h-screen pt-20'>
                <form onSubmit={handleSubmit} className='p-10 w-2/3 mx-auto bg-white rounded-md border border-zinc-900 shadow grid gap-4'>
                <h2 className='font-bold text-gray-700 text-lg'>Login</h2>
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
                        <label htmlFor='password' className="block text-sm font-medium text-gray-700">Password</label>
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
        </>
    );
}
