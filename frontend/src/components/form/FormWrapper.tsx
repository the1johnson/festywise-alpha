import React from 'react';
import GenericWrapper from '../GenericWrapper';

type FormWrapperType = {
    formHeader: string;
    onSubmit: (e: any) => void;
    children: React.ReactElement | React.ReactElement[];
}
export default function FormWrapper(wrapperData: FormWrapperType) {
    return (
        <GenericWrapper>
            <form onSubmit={wrapperData.onSubmit}>
                <h2 className='font-bold text-gray-700 text-lg'>{wrapperData.formHeader}</h2>
                {wrapperData.children}
                <div className='flex'>
                    <input type="submit" value="Submit" className='ml-auto justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500' />
                </div>
            </form>
        </GenericWrapper>
    );
}