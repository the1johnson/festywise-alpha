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
};

export default function SelectFormGroup(params: SelectFormGroupType) {
    function handleFieldChange(e: any) {
        params.onChange(e.target.value);
    }
    return (
        <div>
            <label htmlFor={params.fieldName} className="block text-sm font-medium text-gray-700">{params.displayLabel}</label>
            <select
                name={params.fieldName}
                id={params.fieldName}
                onChange={handleFieldChange}
                className='mt-1 p-2 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300'
            >
                {params.optionItems.map((option) => {
                    return <option key={option.id} value={option.value}>{option.label}</option>
                })}
            </select>
        </div>
    );
}