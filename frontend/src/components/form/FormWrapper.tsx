import React from 'react';

type FormWrapperType = {
    formHeader: string;
    onSubmit: (e: any) => void;
    children: React.ReactElement | React.ReactElement[];
}
export default function FormWrapper(wrapperData: FormWrapperType) {
    return (
        <div className='bg-zinc-400 min-h-screen py-20'>
            <form onSubmit={wrapperData.onSubmit} className='p-10 w-2/3 mx-auto bg-white rounded-md border border-zinc-900 shadow grid gap-4'>
                <h2 className='font-bold text-gray-700 text-lg'>{wrapperData.formHeader}</h2>
                {wrapperData.children}
                <div className='flex'>
                    <input type="submit" value="Submit" className='ml-auto justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500' />
                </div>
            </form>
        </div>
    );
}