import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";

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
        <FormWrapper onSubmit={handleSubmit} formHeader="Create Band">
            <TextInputFormGroup fieldName="name" onChange={setProjectName} displayLabel='Project Name' fieldValue={projectName} />
            <SelectFormGroup fieldName="performance_type" onChange={setPerformanceType} displayLabel='Preferred Performance Type' fieldValue={performanceType} optionItems={performanceTypeOptionItems} />
            <SelectFormGroup fieldName="genre" onChange={setGenre} displayLabel='Preferred Genre' fieldValue={genre} optionItems={genreOptionItems} />
            <CheckboxFormGroup fieldName="performance_duration" onChange={setPerformanceDuration} displayLabel='Performance Duration' fieldValue={performanceDuration} optionItems={performanceDurationOptionItems} isRadio={true} />
            <TextInputFormGroup fieldName="member_count" onChange={setMemberCount} displayLabel='How Many Artists' fieldValue={memberCount} />
            <TextInputFormGroup fieldName="website" onChange={setWebsite} displayLabel='Website' fieldValue={website} />
            <TextInputFormGroup fieldName="phone_number" onChange={setPhoneNumber} displayLabel='Phone Number' fieldValue={phoneNumber} />
            <TextInputFormGroup fieldName="email" onChange={setEmail} displayLabel='Email' fieldValue={email} />
            <TextInputFormGroup fieldName="social_facebook" onChange={setSocialFacebook} displayLabel='Facebook' fieldValue={socialFacebook} />
            <TextInputFormGroup fieldName="social_youtube" onChange={setSocialYoutube} displayLabel='YouTube' fieldValue={socialYoutube} />
            <TextInputFormGroup fieldName="social_soundcloud" onChange={setSocialSoundcloud} displayLabel='Sound Cloud' fieldValue={socialSoundcloud} />
            <TextInputFormGroup fieldName="social_bandcamp" onChange={setSocialBandcamp} displayLabel='Band Camp' fieldValue={socialBandcamp} />
            <CheckboxFormGroup fieldName="location_preference" onChange={setLocationPreference} displayLabel='Location Preferences' fieldValue={locationPreference} optionItems={locationPreferenceOptionItems} isRadio={true} />
            <CheckboxFormGroup fieldName="equipment" onChange={setEquipment} displayLabel='Equipment Needs' fieldValue={equipment} optionItems={equipmentOptionItems} />
        </FormWrapper>
    );
}
