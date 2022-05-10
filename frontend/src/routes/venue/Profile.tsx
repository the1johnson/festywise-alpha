import React, { useState } from 'react';
import { useParams } from "react-router-dom";
import { useSelector } from 'react-redux';
import GigManager from '../../components/gigs/Manager';

export default function VenueProfile() {
    const params = useParams();
    const venues = useSelector((state: any) => state.venues.venue_list);
    const venue = venues.filter((v: any) => v.id == params.venueId)[0];

    return (
        <div>
            <h2 className='text-lg font-bold tracking-wide'>Venue Profile: {params.venueId}</h2>
            <div>{venue.name}</div>
            <div>{venue.contact_name} - {venue.contact_title}</div>
            <div>{venue.email}</div>
            <div>{venue.performance_type} - {venue.genre}</div>

            <GigManager gigList={venue.gigs} venueId={params.venueId} defaultGenre={venue.genre} />            
        </div>
    );
}
