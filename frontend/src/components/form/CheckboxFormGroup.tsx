import React from 'react';
type CheckboxItemType = {
    id: number;
    label: string;
    value: number | string;
};
type CheckboxFormGroupType = {
    fieldName: string;
    onChange: (e: any) => void;
    displayLabel: string;
    fieldValue: string;
    optionItems: Array<CheckboxItemType>;
    isRadio?: boolean;
    labelClassList?: string;
    boxWrapperClassList?: string;
};
export default function CheckboxFormGroup(params: CheckboxFormGroupType) {
    function handleFieldChange(e: any) {
        params.onChange(e.target.value);
    }

    return (
        <>
            <div className={params.labelClassList}>{params.displayLabel}</div>
            <div className={params.boxWrapperClassList}>
                {params.optionItems.map((option) => {
                    return (
                        <div key={option.id}>
                            <input id={`${params.fieldName}_${option.id}`} type={params.isRadio ? "radio" : "checkbox"} name={params.fieldName} value={option.value} />
                            <label htmlFor={`${params.fieldName}_${option.id}`} className="ml-2 text-sm font-medium text-gray-700">{option.label}</label>
                        </div>
                    );
                })}
            </div>
        </>
    );
}