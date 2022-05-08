import React, { useEffect } from 'react';
import { Outlet, Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';

import GenericWrapper from '../../components/GenericWrapper';
import { setBands } from '../../features/bandsSlice';


export default function BandsList() {
    const dispatch = useDispatch();
    const bands = useSelector((state: any) => state.bands.band_list);

    function updateBandsList() {
        const allBandsApiUrl = `${process.env.REACT_APP_AJAX_URL}/all_bands`;
        const getData = async () => {
            try {
                const response = await fetch(
                    allBandsApiUrl,
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
                dispatch(setBands(actualData));
            } catch (err: any) {

            }
        }
        getData();
    }
    useEffect(() => {
        updateBandsList();
    }, []);
    return (
        <GenericWrapper>
            <h2 className='text-lg font-bold tracking-wide'>Bands List</h2>
            <div className='flex grid grid-cols-2'>
                <ul>
                    {bands.map((band: any) => {
                        return <li key={band.id}><Link to={`/bands/${band.id}`}>{band.name}</Link></li>;
                    })}
                </ul>
                <Outlet />
            </div>
        </GenericWrapper>
    );
}