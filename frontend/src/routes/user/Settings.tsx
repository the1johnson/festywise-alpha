import React, { useState } from 'react';
import GenericHeading from '../../components/GenericHeading'
import FormWrapper from '../../components/form/FormWrapper';
import TextInputFormGroup from '../../components/form/TextInputFormGroup';

export default function UserSettings() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    function handleSubmit(e: any) {
        e.preventDefault();
    }
    return (
        <FormWrapper onSubmit={handleSubmit} submitLabel="Submit">
            <GenericHeading label="Update User Settings" />
            <div className='flex grid grid-cols-3 gap-3 mt-4'>
                <TextInputFormGroup
                    fieldName="first_name"
                    onChange={setFirstName}
                    displayLabel='First Name'
                    fieldValue={firstName}
                    labelClassList="font-bold"
                    inputClassList="col-span-2 p-2 rounded-md shadow-sm block w-full border border-gray-300"
                />
                <TextInputFormGroup
                    fieldName="last_name"
                    onChange={setLastName}
                    displayLabel='Last Name'
                    fieldValue={lastName}
                    labelClassList="font-bold"
                    inputClassList="col-span-2 p-2 rounded-md shadow-sm block w-full border border-gray-300"
                />
            </div>
        </FormWrapper>
    );
}
