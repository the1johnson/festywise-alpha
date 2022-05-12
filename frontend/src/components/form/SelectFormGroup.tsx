import React from 'react';
type SelectOptionItemType = {
    id: number;
    label: string;
    value: number | string;
};
type SelectFormGroupType = {
    fieldName: string;
    onChange: (e: any) => void;
    displayLabel: string;
    fieldValue: string;
    optionItems: Array<SelectOptionItemType>;
    labelClassList?: string;
    selectClassList?: string;
};

export default function SelectFormGroup(params: SelectFormGroupType) {
    function handleFieldChange(e: any) {
        params.onChange(e.target.value);
    }
    return (
        <>
            <label htmlFor={params.fieldName} className={params.labelClassList}>{params.displayLabel}</label>
            <select
                name={params.fieldName}
                id={params.fieldName}
                onChange={handleFieldChange}
                value={params.fieldValue}
                className={params.selectClassList}
            >
                <option></option>
                {params.optionItems.map((option) => {
                    return <option key={option.id} value={option.value}>{option.label}</option>
                })}
            </select>
        </>
    );
}