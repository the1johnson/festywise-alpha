type TextInputFormGroupType = {
    fieldName: string;
    onChange: (e: any) => void;
    displayLabel: string;
    fieldValue: string;
    isPassword?: boolean;
}
export default function TextInputFormGroup(formGroup: TextInputFormGroupType) {
    function handleFieldChange(e: any) {
        formGroup.onChange(e.target.value);
    }
    return (
        <div>
            <label htmlFor={formGroup.fieldName} className="block text-sm font-medium text-gray-700">{formGroup.displayLabel}</label>
            <input
                className='mt-1 p-2 rounded-md shadow-sm block w-full sm:text-sm border border-gray-300'
                value={formGroup.fieldValue}
                onChange={handleFieldChange}
                type={formGroup.isPassword ? 'password' : 'text'}
                name={formGroup.fieldName}
                id={formGroup.fieldName} />
        </div>
    );
}