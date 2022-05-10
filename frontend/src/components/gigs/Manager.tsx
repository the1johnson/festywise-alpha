import React, { useState } from 'react';
import AddGigToVenueForm from '../form/AddGigToVenueForm';
import GigList from './List';
type GigsType = {
    name: string;
    payment: string;
    genre: string;
    description: string;
    start_date: string;
    end_date: string;
}
type GigManagerType = {
    venueId: string | undefined;
    defaultGenre: string;
    gigList: Array<GigsType>;
};
export default function GigManager(params: GigManagerType) {
    const [displayTab, setDisplayTab] = useState('list');
    function renderTab(tab: string) {
        switch (tab) {
            case 'create':
                return <AddGigToVenueForm venueId={params.venueId} defaultGenre={params.defaultGenre} />
            case 'list':
            default:
                return <GigList gigs={params.gigList} />
        }
    }
    return (
        <>
            <h3 className='font-bold tracking-wide'>Gigs Manager</h3>
            {renderTab(displayTab)}
        </>
    )
}