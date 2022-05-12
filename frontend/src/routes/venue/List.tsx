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
            <div className='flex grid grid-cols-3'>
                <div>
                    <GenericHeading label="Venues List" />
                    <ul className="mt-4 list-disc list-inside">
                        {data.map((venue: any) => {
                            return <li key={venue.id} className="mb-2"><Link to={`/venues/${venue.id}`}>{venue.name}</Link></li>;
                        })}
                    </ul>
                </div>

                <div className="col-span-2">
                    <Outlet />
                </div>
            </div>
        </GenericWrapper>
    );
}