import { Outlet, Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import GenericWrapper from '../../components/GenericWrapper';
import useFetch from '../../hooks/useFetch';
import { setVenues } from '../../features/venuesSlice';

export default function VenuesList() {
    const dispatch = useDispatch();
    const {data, loading} = useFetch(`${process.env.REACT_APP_AJAX_URL}/all_venues`);
    dispatch(setVenues(data));
    return (
        <GenericWrapper>
            <h1 className='text-lg font-bold tracking-wide'>Venues List</h1>
            <div className='flex grid grid-cols-2'>
                <ul>
                    {data.map((venue: any) => {
                        return <li key={venue.id}><Link to={`/venues/${venue.id}`}>{venue.name}</Link></li>;
                    })}
                </ul>
                <Outlet />
            </div>
        </GenericWrapper>
    );
}