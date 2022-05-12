import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import GenericHeading from '../../components/GenericHeading'
import FormWrapper from '../../components/form/FormWrapper';
import TextInputFormGroup from '../../components/form/TextInputFormGroup';
import SelectFormGroup from '../../components/form/SelectFormGroup';
import CheckboxFormGroup from '../../components/form/CheckboxFormGroup';

export default function VenueCreate() {
    const navigate = useNavigate();
    const userId = useSelector((state: any) => state.auth.userId);
    const createVenueApiUrl = `${process.env.REACT_APP_AJAX_URL}/users/${userId}/venues`;
    const [venueName, setVenueName] = useState('');
    const [contactName, setContactName] = useState('');
    const [contactTitle, setContactTitle] = useState('');
    const [website, setWebsite] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [emailAddress, setEmailAddress] = useState('');
    const [capacity, setCapacity] = useState('');
    const [performanceType, setPerformanceType] = useState('');
    const [genre, setGenre] = useState('');
    const [equipment, setEquipment] = useState('');
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    const performanceTypeOptionItems = useSelector((state: any) => state.optionItems.performance_type);
    const genreOptionItems = useSelector((state: any) => state.optionItems.genre);
    const equipmentOptionItems = useSelector((state: any) => state.optionItems.equipment);

    function handleSubmit(e: any) {
        e.preventDefault();
        const getData = async () => {
            try {
                const response = await fetch(
                    createVenueApiUrl,
                    {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                            name: venueName,
                            contact_name: contactName,
                            contact_title: contactTitle,
                            website: website,
                            phone_number: phoneNumber,
                            email: emailAddress,
                            capacity: capacity,
                            performance_type: performanceType,
                            genre: genre,
                            equipment_list: equipment
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
                if (actualData.venue) {
                    navigate("/new_venue_confirm", { replace: true });
                }
            } catch (err: any) {
                setError(err.message);
                setData(null);
            }
        }
        getData();
    }
    return (
        <FormWrapper onSubmit={handleSubmit} submitLabel="Create">
            <GenericHeading label="Create Venue" />
            <div className='flex grid grid-cols-3 gap-3 mt-4'>
                <TextInputFormGroup
                    fieldName="venue_name"
                    onChange={setVenueName}
                    displayLabel='Venue Name'
                    fieldValue={venueName}
                    labelClassList="font-bold"
                    inputClassList="col-span-2 p-2 rounded-md shadow-sm block w-full border border-gray-300"
                />
                <TextInputFormGroup
                    fieldName="contact_name"
                    onChange={setContactName}
                    displayLabel='Contact Name'
                    fieldValue={contactName}
                    labelClassList="font-bold"
                    inputClassList="col-span-2 p-2 rounded-md shadow-sm block w-full border border-gray-300"
                />
                <TextInputFormGroup
                    fieldName="contact_title"
                    onChange={setContactTitle}
                    displayLabel='Contact Title'
                    fieldValue={contactTitle}
                    labelClassList="font-bold"
                    inputClassList="col-span-2 p-2 rounded-md shadow-sm block w-full border border-gray-300"
                />
                <TextInputFormGroup
                    fieldName="website"
                    onChange={setWebsite}
                    displayLabel='Website'
                    fieldValue={website}
                    labelClassList="font-bold"
                    inputClassList="col-span-2 p-2 rounded-md shadow-sm block w-full border border-gray-300"
                />
                <TextInputFormGroup
                    fieldName="phone_number"
                    onChange={setPhoneNumber}
                    displayLabel='Phone Number'
                    fieldValue={phoneNumber}
                    labelClassList="font-bold"
                    inputClassList="col-span-2 p-2 rounded-md shadow-sm block w-full border border-gray-300"
                />
                <TextInputFormGroup
                    fieldName="email_address"
                    onChange={setEmailAddress}
                    displayLabel='Email Address'
                    fieldValue={emailAddress}
                    labelClassList="font-bold"
                    inputClassList="col-span-2 p-2 rounded-md shadow-sm block w-full border border-gray-300"
                />
                <TextInputFormGroup
                    fieldName="capacity"
                    onChange={setCapacity}
                    displayLabel='Capacity'
                    fieldValue={capacity}
                    labelClassList="font-bold"
                    inputClassList="col-span-2 p-2 rounded-md shadow-sm block w-full border border-gray-300"
                />
                <SelectFormGroup
                    fieldName="performanceType"
                    onChange={setPerformanceType}
                    displayLabel='Preferred Performance Type'
                    fieldValue={performanceType}
                    optionItems={performanceTypeOptionItems}
                    labelClassList="font-bold"
                    selectClassList="col-span-2 p-2 rounded-md shadow-sm block w-full border border-gray-300"
                />
                <SelectFormGroup
                    fieldName="genre"
                    onChange={setGenre}
                    displayLabel='Preferred Genre'
                    fieldValue={genre}
                    optionItems={genreOptionItems}
                    labelClassList="font-bold"
                    selectClassList="col-span-2 p-2 rounded-md shadow-sm block w-full border border-gray-300"
                />
                <CheckboxFormGroup
                    fieldName="equipment"
                    onChange={setEquipment}
                    displayLabel='Equipment'
                    fieldValue={equipment}
                    optionItems={equipmentOptionItems}
                    labelClassList="font-bold"
                    boxWrapperClassList="col-span-2"
                />
            </div>
        </FormWrapper>
    );
}
