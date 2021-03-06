import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { setAuth, setUserId } from '../../features/authSlice';
import GenericHeading from '../../components/GenericHeading'
import FormWrapper from '../../components/form/FormWrapper';
import TextInputFormGroup from '../../components/form/TextInputFormGroup';

export default function UserRegistration() {
    const createUserApiUrl = `${process.env.REACT_APP_AJAX_URL}/users`;
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
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
                    dispatch(setUserId(actualData.user.id));
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
        <FormWrapper onSubmit={handleSubmit} submitLabel="Register">
            <GenericHeading label="Register for Festywise" />
            <div className='flex grid grid-cols-3 gap-3 mt-4'>
                <TextInputFormGroup
                    fieldName='username'
                    onChange={setUsername}
                    displayLabel="Username"
                    fieldValue={username}
                    labelClassList="font-bold"
                    inputClassList="col-span-2 p-2 rounded-md shadow-sm block w-full border border-gray-300"
                />
                <TextInputFormGroup
                    fieldName='email'
                    onChange={setEmail}
                    displayLabel="Email Address"
                    fieldValue={email}
                    labelClassList="font-bold"
                    inputClassList="col-span-2 p-2 rounded-md shadow-sm block w-full border border-gray-300"
                />
                <TextInputFormGroup
                    fieldName='password'
                    onChange={setPassword}
                    displayLabel="Password"
                    fieldValue={password}
                    isPassword={true}
                    labelClassList="font-bold"
                    inputClassList="col-span-2 p-2 rounded-md shadow-sm block w-full border border-gray-300"
                />
            </div>
        </FormWrapper>
    );
}
