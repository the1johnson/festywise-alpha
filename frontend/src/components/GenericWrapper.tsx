import React from 'react';

type BackgroundWrapperType = {
    children: React.ReactElement | React.ReactElement[];
};
export default function BackgroundWrapper(params: BackgroundWrapperType) {
    return (
        <div className='bg-zinc-400 min-h-screen py-20'>
            <div className='p-10 w-2/3 mx-auto bg-white rounded-md border border-zinc-900 shadow grid gap-4'>
                {params.children}
            </div>
        </div>
    );
}