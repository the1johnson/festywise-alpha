import React from 'react';
import GenericWrapper from '../GenericWrapper';

type FormWrapperType = {
    onSubmit: (e: any) => void;
    submitLabel: string;
    children: React.ReactElement | React.ReactElement[];
}
export default function FormWrapper(params: FormWrapperType) {
    return (
        <GenericWrapper>
            <form onSubmit={params.onSubmit}>
                {params.children}
                <div className='flex mt-4'>
                    <input type="submit" value={params.submitLabel} className='ml-auto border-blue-500 text-blue-500 rounded border-2 py-1 px-2' />
                </div>
            </form>
        </GenericWrapper>
    );
}