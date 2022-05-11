import { useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import useFetch from '../../hooks/useFetch';
import iconDenySVG from '../../assets/icon/deny.svg'
import iconApproveSVG from '../../assets/icon/approve.svg'

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
export default function GigProfile(params: GigProfileType) {
    const navigate = useNavigate();
    const gig = params.gigList.filter((g: any) => g.id == params.gigId)[0];
    const { data, loading } = useFetch(`${process.env.REACT_APP_AJAX_URL}/gigs/${params.venueId}/gig_applications`);
    function updateApplicationStatus(status: string, applicationId: number) {
        const getData = async () => {
            try {
                const response = await fetch(
                    `${process.env.REACT_APP_AJAX_URL}/gig_applications/${applicationId}`,
                    {
                        method: 'PUT',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                            status: status
                        })
                    }
                );
                let actualData = await response.json();
                if (actualData.application) {
                    navigate("/venues", { replace: true });
                }
            } catch (err: any) {

            }
        }
        getData();
    }
    return (
        <>
            <h4>{gig.name}</h4>
            <div>{gig.start_date.substring(0, 19)} - {gig.end_date.substring(0, 19)}</div>

            <h5>Applications</h5>
            <ul>
                {data.map((application: any) => {
                    return (
                        <li key={application.id}>
                            <div className='flex items-center'>
                                <div>{application.band.name} - {application.status}</div>
                                <div className='ml-auto'>
                                    <button onClick={() => {
                                        updateApplicationStatus('denied', application.id)
                                    }} className='justify-center p-1 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700'>
                                        <img src={iconDenySVG} alt="Deny Application" className="h-5 w-5" />
                                    </button>
                                    <button onClick={() => {
                                        updateApplicationStatus('approved', application.id)
                                    }} className='ml-2 justify-center p-1 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700'>
                                        <img src={iconApproveSVG} alt="Approve Application" className="h-5 w-5" />
                                    </button>
                                </div>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </>
    )
}