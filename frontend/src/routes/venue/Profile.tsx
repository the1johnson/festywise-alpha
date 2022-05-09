import React from 'react';
import { useParams } from "react-router-dom";
import { useSelector } from 'react-redux';

export default function VenueProfile() {
    const params = useParams();
    const venues = useSelector((state: any) => state.venues.venue_list);
    const venue = venues.filter((v:any) => v.id == params.venueId)[0];

    return (
        <div>
            Venue Profile: {params.venueId}
            <div>{venue.name}</div>
            <div>{venue.contact_name} - {venue.contact_title}</div>
            <div>{venue.email}</div>
            <div>{venue.performance_type} - {venue.genre}</div>
        </div>
    );
}
