type DateTimeFormGroupType = {
    dateFieldName: string;
    onDateChange: (e: any) => void;
    displayLabel: string;
    dateFieldValue: string;
}
export default function DateTimeFormGroup(params: DateTimeFormGroupType) {
    function handleDateFieldChange(e: any) {
        params.onDateChange(e.target.value);
    }
    return (
        <div>
            <label htmlFor={params.dateFieldName} className="block text-sm font-medium text-gray-700">{params.displayLabel}</label>
            <input className='p-2 rounded-md shadow-sm w-full block sm:text-sm border border-gray-300' type="datetime-local" name={params.dateFieldName} id={params.dateFieldName} min="2022-01-01" max="2024-12-31" value={params.dateFieldValue} onChange={handleDateFieldChange} />
        </div>
    )
}