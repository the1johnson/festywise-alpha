import React from 'react';

type BackgroundWrapperType = {
    children: React.ReactElement | React.ReactElement[];
};
export default function BackgroundWrapper(params: BackgroundWrapperType) {
    return (
        <div className='bg-zinc-400 min-h-screen py-20'>
            <div className='p-10 w-2/3 mx-auto bg-white rounded-md shadow'>
                {params.children}
            </div>
        </div>
    );
}