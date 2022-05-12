import { Outlet, Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import GenericWrapper from '../../components/GenericWrapper';
import GenericHeading from '../../components/GenericHeading'
import useFetch from '../../hooks/useFetch';
import { setVenues } from '../../features/venuesSlice';

export default function VenuesList() {
    const dispatch = useDispatch();
    const { data, loading } = useFetch(`${process.env.REACT_APP_AJAX_URL}/all_venues`);
    dispatch(setVenues(data));
    return (
        <GenericWrapper>
            <GenericHeading label="Venues List" />
            <div className='flex grid grid-cols-3'>
                <ul>
                    {data.map((venue: any) => {
                        return <li key={venue.id}><Link to={`/venues/${venue.id}`}>{venue.name}</Link></li>;
                    })}
                </ul>
                <div className="col-span-2">
                    <Outlet />
                </div>
            </div>
        </GenericWrapper>
    );
}