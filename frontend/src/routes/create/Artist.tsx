import React, { useState } from 'react';
import FormWrapper from '../../components/form/FormWrapper';
import TextInputFormGroup from '../../components/form/TextInputFormGroup';

export default function CreateArtist() {
    const createArtistApiUrl = process.env.REACT_APP_AJAX_URL + `/users/1/bands`;
    const [projectName, setProjectName] = useState('');
    const [performerCount, setPerformerCount] = useState('');
    const [website, setWebsite] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [socialFacebook, setSocialFacebook] = useState('');
    const [socialYoutube, setSocialYoutube] = useState('');
    const [socialSoundcloud, setSocialSoundcloud] = useState('');
    const [socialBandpage, setSocialBandpage] = useState('');

    function handleSubmit(e: any) {
        e.preventDefault();
        const getData = async () => {
            try {
                const response = await fetch(
                    createArtistApiUrl,
                    {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                            name: projectName,
                            member_count: performerCount,
                            website: website,
                            phone_number: phoneNumber,
                            email: email,
                            social_facebook: socialFacebook,
                            social_youtube: socialYoutube,
                            social_soundcloud: socialSoundcloud,
                            social_bandcamp: socialBandpage
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
                console.log(actualData)
                if (actualData) {
                }
            } catch (err: any) {
                setError(err.message);
                setData(null);
            }
        }
        getData();
    }

    return (
        <FormWrapper onSubmit={handleSubmit} formHeader="Create Project">
            <TextInputFormGroup fieldName="project_name" onChange={setProjectName} displayLabel='Project Name' fieldValue={projectName} />
            <div>
                <label htmlFor='username' className="block text-sm font-medium text-gray-700">Performance Type</label>
                <select
                    className='mt-1 p-2 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300'
                >
                    <option>Live Music</option>
                </select>
            </div>
            <div>
                <label htmlFor='username' className="block text-sm font-medium text-gray-700">Genre</label>
                <select
                    className='mt-1 p-2 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300'
                >
                    <option>Bluegrass</option>
                </select>
            </div>
            <div>
                <label htmlFor='username' className="block text-sm font-medium text-gray-700">Performance Duration</label>
                <div>
                    <input type="radio" name="performance_duration" value="30" />
                    <label htmlFor='username' className="ml-2 text-sm font-medium text-gray-700">30 min</label>
                </div>
                <div>
                    <input type="radio" name="performance_duration" value="45" />
                    <label htmlFor='username' className="ml-2 text-sm font-medium text-gray-700">45 min</label>
                </div>
                <div>
                    <input type="radio" name="performance_duration" value="60" />
                    <label htmlFor='username' className="ml-2 text-sm font-medium text-gray-700">60 min</label>
                </div>
                <div>
                    <input type="radio" name="performance_duration" value="90" />
                    <label htmlFor='username' className="ml-2 text-sm font-medium text-gray-700">90 min</label>
                </div>
                <div>
                    <input type="radio" name="performance_duration" value="120" />
                    <label htmlFor='username' className="ml-2 text-sm font-medium text-gray-700">120 min</label>
                </div>
            </div>
            <TextInputFormGroup fieldName="performer_count" onChange={setPerformerCount} displayLabel='Number of Performers' fieldValue={performerCount} />
            <TextInputFormGroup fieldName="website" onChange={setWebsite} displayLabel='Website' fieldValue={website} />
            <TextInputFormGroup fieldName="phoneNumber" onChange={setPhoneNumber} displayLabel='Phone Number' fieldValue={phoneNumber} />
            <TextInputFormGroup fieldName="email" onChange={setEmail} displayLabel='Email' fieldValue={email} />

            <TextInputFormGroup fieldName="socialFacebook" onChange={setSocialFacebook} displayLabel='Facebook' fieldValue={socialFacebook} />
            <TextInputFormGroup fieldName="socialYoutube" onChange={setSocialYoutube} displayLabel='YouTube' fieldValue={socialYoutube} />
            <TextInputFormGroup fieldName="socialSoundcloud" onChange={setSocialSoundcloud} displayLabel='Sound Cloud' fieldValue={socialSoundcloud} />
            <TextInputFormGroup fieldName="socialBandpage" onChange={setSocialBandpage} displayLabel='Band Camp' fieldValue={socialBandpage} />

            <div>
                <div className="block text-sm font-medium text-gray-700">Location Preferences</div>
                <div>
                    <input type="radio" name="location_preference" value="30" />
                    <label htmlFor='username' className="ml-2 text-sm font-medium text-gray-700">San Francisco</label>
                </div>
                <div>
                    <input type="radio" name="location_preference" value="45" />
                    <label htmlFor='username' className="ml-2 text-sm font-medium text-gray-700">East Bay</label>
                </div>
                <div>
                    <input type="radio" name="location_preference" value="60" />
                    <label htmlFor='username' className="ml-2 text-sm font-medium text-gray-700">South Bay</label>
                </div>
                <div>
                    <input type="radio" name="location_preference" value="90" />
                    <label htmlFor='username' className="ml-2 text-sm font-medium text-gray-700">North Bay</label>
                </div>
            </div>
            <div>
                <div className="block text-sm font-medium text-gray-700">Equipment Needs</div>
                <div>
                    <input type="checkbox" name="location_preference" value="90" />
                    <label htmlFor='username' className="ml-2 text-sm font-medium text-gray-700">Sound System</label>
                    <input
                        className='ml-2 p-2 rounded-md shadow-sm inline sm:text-sm border border-gray-300'
                        type="number" />
                </div>
                <div>
                    <input type="checkbox" name="location_preference" value="90" />
                    <label htmlFor='username' className="ml-2 text-sm font-medium text-gray-700">Microphone</label>
                    <input
                        className='ml-2 p-2 rounded-md shadow-sm inline sm:text-sm border border-gray-300'
                        type="number" />
                </div>
                <div>
                    <input type="checkbox" name="location_preference" value="90" />
                    <label htmlFor='username' className="ml-2 text-sm font-medium text-gray-700">Monitor</label>
                    <input
                        className='ml-2 p-2 rounded-md shadow-sm inline sm:text-sm border border-gray-300'
                        type="number" />
                </div>
                <div>
                    <input type="checkbox" name="location_preference" value="90" />
                    <label htmlFor='username' className="ml-2 text-sm font-medium text-gray-700">XLR Cable</label>
                    <input
                        className='ml-2 p-2 rounded-md shadow-sm inline sm:text-sm border border-gray-300'
                        type="number" />
                </div>
            </div>
        </FormWrapper>
    );
}
