import React, { useEffect } from 'react';
import { Outlet, Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import useFetch from '../../hooks/useFetch';
import GenericWrapper from '../../components/GenericWrapper';
import { setBands } from '../../features/bandsSlice';


export default function BandsList() {
    const dispatch = useDispatch();
    const {data, loading} = useFetch(`${process.env.REACT_APP_AJAX_URL}/all_bands`);
    dispatch(setBands(data));
    return (
        <GenericWrapper>
            <h2 className='text-lg font-bold tracking-wide'>Bands List</h2>
            <div className='flex grid grid-cols-2'>
                <ul>
                    {data.map((band: any) => <li key={band.id}><Link to={`/bands/${band.id}`}>{band.name}</Link></li>)}
                </ul>
                <Outlet />
            </div>
        </GenericWrapper>
    );
}