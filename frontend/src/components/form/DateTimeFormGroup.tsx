type DateTimeFormGroupType = {
    fieldName: string;
    onDateChange: (e: any) => void;
    displayLabel: string;
    fieldValue: string;
}
export default function DateTimeFormGroup(params: DateTimeFormGroupType) {
    function handleFieldChange(e: any) {
        params.onDateChange(e.target.value);
    }
    return (
        <div>
            <label htmlFor={params.fieldName} className="block text-sm font-medium text-gray-700">{params.displayLabel}</label>
            <input className='p-2 rounded-md shadow-sm w-full block sm:text-sm border border-gray-300' type="datetime-local" name={params.fieldName} id={params.fieldName} min="2022-01-01" max="2024-12-31" value={params.fieldValue} onChange={handleFieldChange} />
        </div>
    )
}