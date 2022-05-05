import React, { useState } from 'react';
import FormWrapper from '../../components/form/FormWrapper';
import TextInputFormGroup from '../../components/form/TextInputFormGroup';

export default function CreateVenue() {
    const [venueName, setVenueName] = useState('');
    const [contactName, setContactName] = useState('');
    const [contactTitle, setContactTitle] = useState('');
    const [website, setWebsite] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [emailAddress, setEmailAddress] = useState('');
    const [capacity, setCapacity] = useState('');

    function handleSubmit(e: any) {
        e.preventDefault();
    }
    return (
        <FormWrapper onSubmit={handleSubmit} formHeader="Create Venue">
            <TextInputFormGroup fieldName="venue_name" onChange={setVenueName} displayLabel='Venue Name' fieldValue={venueName} />
            <TextInputFormGroup fieldName="contact_name" onChange={setContactName} displayLabel='Contact Name' fieldValue={contactName} />
            <TextInputFormGroup fieldName="contact_title" onChange={setContactTitle} displayLabel='Contact Title' fieldValue={contactTitle} />
            <TextInputFormGroup fieldName="website" onChange={setWebsite} displayLabel='Website' fieldValue={website} />
            <TextInputFormGroup fieldName="phone_number" onChange={setPhoneNumber} displayLabel='Phone Number' fieldValue={phoneNumber} />
            <TextInputFormGroup fieldName="email_address" onChange={setEmailAddress} displayLabel='Email Address' fieldValue={emailAddress} />
            <TextInputFormGroup fieldName="capacity" onChange={setCapacity} displayLabel='Capacity' fieldValue={capacity} />
            <div>
                <label htmlFor='username' className="block text-sm font-medium text-gray-700">Preferred Performance Type</label>
                <select
                    className='mt-1 p-2 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300'
                >
                    <option>Live Music</option>
                </select>
            </div>
            <div>
                <label htmlFor='username' className="block text-sm font-medium text-gray-700">Preferred Genre</label>
                <select
                    className='mt-1 p-2 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300'
                >
                    <option>Bluegrass</option>
                </select>
            </div>
            <div>
                <div className="block text-sm font-medium text-gray-700">Equipment</div>
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
