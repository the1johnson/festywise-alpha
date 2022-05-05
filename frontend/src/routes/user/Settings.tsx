import React, { useState } from 'react';
import FormWrapper from '../../components/form/FormWrapper';
import TextInputFormGroup from '../../components/form/TextInputFormGroup';

export default function UserSettings() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    function handleSubmit(e: any) {
        e.preventDefault();
    }
    return (
        <FormWrapper onSubmit={handleSubmit} formHeader="User Settings">
            <TextInputFormGroup fieldName="first_name" onChange={setFirstName} displayLabel='First Name' fieldValue={firstName} />
            <TextInputFormGroup fieldName="last_name" onChange={setLastName} displayLabel='Last Name' fieldValue={lastName} />
        </FormWrapper>
    );
}
