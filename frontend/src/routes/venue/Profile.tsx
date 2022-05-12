import React, { useState } from 'react';
import { useParams } from "react-router-dom";
import { useSelector } from 'react-redux';
import GigManager from '../../components/gigs/Manager';

export default function VenueProfile() {
    const params = useParams();
    const venues = useSelector((state: any) => state.venues.venue_list);
    const venue = venues.filter((v: any) => v.id == params.venueId)[0];

    return (
        <>
            {
                venue ?
                    <div>
                        < div className='grid grid-cols-2 gap-4' >
                            <div>
                                <div className='font-bold'>Venue Name</div>
                                {venue.name}
                            </div>
                            <div>
                                <div className='font-bold'>Address</div>
                                <address>
                                    {venue.street_address} <br />
                                    {venue.city} {venue.state}, {venue.zip}
                                </address>
                            </div>
                            <div>
                                <div className='font-bold'>Contact Name</div>
                                {venue.contact_name}
                            </div>
                            <div>
                                <div className='font-bold'>Contact Title</div>
                                {venue.contact_title}
                            </div>
                            <div>
                                <div className='font-bold'>Email</div>
                                {venue.email}
                            </div>
                            <div>
                                <div className='font-bold'>Preferred Genre</div>
                                {venue.genre}
                            </div>
                            <div>
                                <div className='font-bold'>Preferred Performance Type</div>
                                {venue.performance_type}
                            </div>
                        </div >


                        <GigManager key={`${venue.id}_gigManager`} gigList={venue.gigs} venueId={params.venueId} defaultGenre={venue.genre} />
                    </div > : <div>Select a venue </div>
            }
        </>
    );
}
