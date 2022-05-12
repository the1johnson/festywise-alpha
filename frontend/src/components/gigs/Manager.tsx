import React, { useState } from 'react';
import AddGigToVenueForm from './AddToVenueForm';
import GigList from './List';
import GigProfile from './Profile';
import {GigsDataType} from '../../custom'
type GigManagerType = {
    venueId: string | undefined;
    defaultGenre: string;
    gigList: Array<GigsDataType>;
};
export default function GigManager(params: GigManagerType) {
    const [displayTab, setDisplayTab] = useState('list');
    const [activeGigId, setActiveGigId] = useState('');
    function showProfileTab(id:number){
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
        <>
            <div className='flex items-center'>
                <div>Gigs Manager</div>
                <button
                    onClick={()=>{
                        setDisplayTab('create')
                    }}
                    className='ml-auto justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700'
                >
                    Add Gig
                </button>
            </div>
            {renderTab(displayTab)}
        </>
    )
}