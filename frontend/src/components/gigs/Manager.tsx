import React, { useState } from 'react';
import AddGigToVenueForm from './AddToVenueForm';
import GigList from './List';
import GigProfile from './Profile';
import { GigsDataType } from '../../custom'
type GigManagerType = {
    venueId: string | undefined;
    defaultGenre: string;
    gigList: Array<GigsDataType>;
};
export default function GigManager(params: GigManagerType) {
    const [displayTab, setDisplayTab] = useState('list');
    const [activeGigId, setActiveGigId] = useState('');
    function showProfileTab(id: number) {
        setDisplayTab('profile')
        setActiveGigId(`${id}`)
    }
    function renderTab(tab: string) {
        switch (tab) {
            case 'create':
                return <AddGigToVenueForm venueId={params.venueId} defaultGenre={params.defaultGenre} />
            case 'profile':
                return <GigProfile venueId={params.venueId} gigId={activeGigId} gigList={params.gigList} />
            case 'list':
            default:
                return <GigList gigs={params.gigList} toProfileTab={showProfileTab} />
        }
    }
    return (
        <div className='bg-zinc-400 rounded p-4 mt-4'>
            <div className='flex items-center mb-4'>
                <div className='font-bold text-lg'>Gigs Manager</div>
                {displayTab !== 'list' ?
                    <button
                        onClick={() => {
                            setDisplayTab('list')
                        }}
                        className='ml-auto border-blue-500 bg-blue-500 text-white rounded border-2 py-1 px-2'
                    >
                        List
                    </button> : <button
                        onClick={() => {
                            setDisplayTab('create')
                        }}
                        className='ml-auto border-blue-500 bg-blue-500 text-white rounded border-2 py-1 px-2'
                    >
                        Add Gig
                    </button>
                }
            </div>
            {renderTab(displayTab)}
        </div>
    )
}