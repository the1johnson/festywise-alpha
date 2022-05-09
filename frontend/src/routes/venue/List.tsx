import React, { useEffect } from 'react';
import { Outlet, Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import GenericWrapper from '../../components/GenericWrapper';
import { setVenues } from '../../features/venuesSlice';

export default function VenuesList() {
    const dispatch = useDispatch();
    const venues = useSelector((state: any) => state.venues.venue_list);
    function updateVenuesList() {
        const allVenuesApiUrl = `${process.env.REACT_APP_AJAX_URL}/all_venues`;
        const getData = async () => {
            try {
                const response = await fetch(
                    allVenuesApiUrl,
                    {
                        method: 'GET',
                        headers: { 'Content-Type': 'application/json' },
                    }
                );

                if (!response.ok) {
                    throw new Error(
                        `This is an HTTP error: The status is ${response.status}`
                    );
                }
                let actualData = await response.json();
                dispatch(setVenues(actualData));
            } catch (err: any) {

            }
        }
        getData();
    }
    useEffect(() => {
        updateVenuesList();
    }, []);
    return (
        <GenericWrapper>
            <h2 className='text-lg font-bold tracking-wide'>Venues List</h2>
            <div className='flex grid grid-cols-2'>
                <ul>
                    {venues.map((venue: any) => {
                        return <li key={venue.id}><Link to={`/venues/${venue.id}`}>{venue.name}</Link></li>;
                    })}
                </ul>
                <Outlet />
            </div>
        </GenericWrapper>
    );
}