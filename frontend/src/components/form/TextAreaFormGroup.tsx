type TextAreaFormGroupType = {
    fieldName: string;
    onChange: (e: any) => void;
    displayLabel: string;
    fieldValue: string;
}
export default function TextAreaFormGroup(formGroup: TextAreaFormGroupType) {
    function handleFieldChange(e: any) {
        formGroup.onChange(e.target.value);
    }
    return (
        <div>
            <label htmlFor={formGroup.fieldName} className="block text-sm font-medium text-gray-700">{formGroup.displayLabel}</label>
            <textarea
                className='mt-1 p-2 rounded-md shadow-sm block w-full sm:text-sm border border-gray-300'
                name={formGroup.fieldName}
                id={formGroup.fieldName}
                onChange={handleFieldChange}
                defaultValue={formGroup.fieldValue}
            >
                
            </textarea>
        </div>
    );
}