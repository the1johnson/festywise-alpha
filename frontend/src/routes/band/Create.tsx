import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import GenericHeading from '../../components/GenericHeading'
import FormWrapper from '../../components/form/FormWrapper';
import TextInputFormGroup from '../../components/form/TextInputFormGroup';
import SelectFormGroup from '../../components/form/SelectFormGroup';
import CheckboxFormGroup from '../../components/form/CheckboxFormGroup';

export default function BandCreate() {
    const navigate = useNavigate();
    const userId = useSelector((state: any) => state.auth.userId);
    const createBandApiUrl = `${process.env.REACT_APP_AJAX_URL}/users/${userId}/bands`;
    const [projectName, setProjectName] = useState('');
    const [memberCount, setMemberCount] = useState('');
    const [website, setWebsite] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [performanceType, setPerformanceType] = useState('');
    const [performanceDuration, setPerformanceDuration] = useState('');
    const [locationPreference, setLocationPreference] = useState('');
    const [genre, setGenre] = useState('');
    const [equipment, setEquipment] = useState('');
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [socialFacebook, setSocialFacebook] = useState('');
    const [socialYoutube, setSocialYoutube] = useState('');
    const [socialSoundcloud, setSocialSoundcloud] = useState('');
    const [socialBandcamp, setSocialBandcamp] = useState('');

    const performanceTypeOptionItems = useSelector((state: any) => state.optionItems.performance_type);
    const genreOptionItems = useSelector((state: any) => state.optionItems.genre);
    const equipmentOptionItems = useSelector((state: any) => state.optionItems.equipment);
    const performanceDurationOptionItems = useSelector((state: any) => state.optionItems.performance_duration);
    const locationPreferenceOptionItems = useSelector((state: any) => state.optionItems.location_preference);

    function handleSubmit(e: any) {
        e.preventDefault();
        const getData = async () => {
            try {
                const response = await fetch(
                    createBandApiUrl,
                    {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                            name: projectName,
                            performance_type: performanceType,
                            genre: genre,
                            performance_duration: performanceDuration,
                            member_count: memberCount,
                            website: website,
                            phone_number: phoneNumber,
                            email: email,
                            social_facebook: socialFacebook,
                            social_youtube: socialYoutube,
                            social_soundcloud: socialSoundcloud,
                            social_bandcamp: socialBandcamp,
                            location_preference: locationPreference
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
                if (actualData.band) {
                    navigate("/new_band_confirm", { replace: true });
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
            <GenericHeading label="Create Band" />
            <div className='flex grid grid-cols-3 gap-3 mt-4'>
                <TextInputFormGroup
                    fieldName="name"
                    onChange={setProjectName}
                    displayLabel='Project Name'
                    fieldValue={projectName}
                    labelClassList="font-bold"
                    inputClassList="col-span-2 p-2 rounded-md shadow-sm block w-full border border-gray-300"
                />
                <SelectFormGroup
                    fieldName="performance_type"
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
                    fieldName="performance_duration"
                    onChange={setPerformanceDuration}
                    displayLabel='Performance Duration'
                    fieldValue={performanceDuration}
                    optionItems={performanceDurationOptionItems}
                    isRadio={true}
                    labelClassList="font-bold"
                    boxWrapperClassList="col-span-2"
                />
                <TextInputFormGroup
                    fieldName="member_count"
                    onChange={setMemberCount}
                    displayLabel='How Many Artists'
                    fieldValue={memberCount}
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
                    fieldName="email"
                    onChange={setEmail}
                    displayLabel='Email'
                    fieldValue={email}
                    labelClassList="font-bold"
                    inputClassList="col-span-2 p-2 rounded-md shadow-sm block w-full border border-gray-300"
                />
                <TextInputFormGroup
                    fieldName="social_facebook"
                    onChange={setSocialFacebook}
                    displayLabel='Facebook'
                    fieldValue={socialFacebook}
                    labelClassList="font-bold"
                    inputClassList="col-span-2 p-2 rounded-md shadow-sm block w-full border border-gray-300"
                />
                <TextInputFormGroup
                    fieldName="social_youtube"
                    onChange={setSocialYoutube}
                    displayLabel='YouTube'
                    fieldValue={socialYoutube}
                    labelClassList="font-bold"
                    inputClassList="col-span-2 p-2 rounded-md shadow-sm block w-full border border-gray-300"
                />
                <TextInputFormGroup
                    fieldName="social_soundcloud"
                    onChange={setSocialSoundcloud}
                    displayLabel='Sound Cloud'
                    fieldValue={socialSoundcloud}
                    labelClassList="font-bold"
                    inputClassList="col-span-2 p-2 rounded-md shadow-sm block w-full border border-gray-300"
                />
                <TextInputFormGroup
                    fieldName="social_bandcamp"
                    onChange={setSocialBandcamp}
                    displayLabel='Band Camp'
                    fieldValue={socialBandcamp}
                    labelClassList="font-bold"
                    inputClassList="col-span-2 p-2 rounded-md shadow-sm block w-full border border-gray-300"
                />
                <CheckboxFormGroup
                    fieldName="location_preference"
                    onChange={setLocationPreference}
                    displayLabel='Location Preferences'
                    fieldValue={locationPreference}
                    labelClassList="font-bold"
                    optionItems={locationPreferenceOptionItems}
                    isRadio={true}
                    boxWrapperClassList="col-span-2"
                />
                <CheckboxFormGroup
                    fieldName="equipment"
                    onChange={setEquipment}
                    displayLabel='Equipment Needs'
                    fieldValue={equipment}
                    optionItems={equipmentOptionItems}
                    labelClassList="font-bold"
                    boxWrapperClassList="col-span-2"
                />
            </div>
        </FormWrapper>
    );
}
