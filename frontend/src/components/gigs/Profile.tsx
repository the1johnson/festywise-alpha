import {useEffect} from 'react'
import useFetch from '../../hooks/useFetch';

type GigsType = {
    name: string;
    payment: string;
    genre: string;
    description: string;
    start_date: string;
    end_date: string;
}
type GigProfileType = {
    venueId: string | undefined;
    gigId: string | undefined;
    gigList: Array<GigsType>;
}
export default function GigProfile(params:GigProfileType){
    const gig = params.gigList.filter((g: any) => g.id == params.gigId)[0];
    const {data, loading} = useFetch(`${process.env.REACT_APP_AJAX_URL}/gigs/${params.venueId}/gig_applications`);
    return(
    <>
        <h4>{gig.name}</h4>
        <div>{gig.start_date.substring(0,19)} - {gig.end_date.substring(0,19)}</div>

        <h5>Applications</h5>
        <ul>
            {data.map((application: any) => {
                return <li key={application.id}>{application.band.name} - {application.status}</li>;
            })}
        </ul>
    </>
    )
}