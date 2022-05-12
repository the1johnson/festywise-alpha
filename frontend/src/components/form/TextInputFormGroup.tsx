type TextInputFormGroupType = {
    fieldName: string;
    onChange: (e: any) => void;
    displayLabel: string;
    fieldValue: string;
    isPassword?: boolean;
    labelClassList?: string;
    inputClassList?: string;
}
export default function TextInputFormGroup(params: TextInputFormGroupType) {
    function handleFieldChange(e: any) {
        params.onChange(e.target.value);
    }
    return (
        <>
            <label htmlFor={params.fieldName} className={params.labelClassList}>{params.displayLabel}</label>
            <input
                className={params.inputClassList}
                value={params.fieldValue}
                onChange={handleFieldChange}
                type={params.isPassword ? 'password' : 'text'}
                name={params.fieldName}
                id={params.fieldName} />
        </>
    );
}