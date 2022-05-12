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
    const monthAbbreviations = [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec'
    ]
    function simpleDate(dateString: string) {
        const eventStart = new Date(dateString)
        const startHours = eventStart.getHours()
        const startMinutes = eventStart.getMinutes()
        return (
            <div>
                {monthAbbreviations[eventStart.getMonth()]} {eventStart.getDate()}, {eventStart.getFullYear()} @{startHours > 12 ? startHours - 12 : startHours}:{startMinutes > 10 ? startMinutes : `0${startMinutes}`} {startHours > 11 ? 'pm' : 'am'}
            </div>
        )
    }
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
            <div className='grid grid-cols-2 gap-4'>
                <div>
                    <div className='font-bold'>Name</div>
                    {gig.name}
                </div>
                <div>
                    <div className='font-bold'>Payment</div>
                    {gig.payment}
                </div>
                <div className='col-span-2'>
                    <div className='font-bold'>Description</div>
                    {gig.description}
                </div>
                <div>
                    <div className='font-bold'>Start Time</div>
                    {simpleDate(gig.start_date)}
                </div>
                <div>
                    <div className='font-bold'>End Time</div>
                    {simpleDate(gig.end_date)}
                </div>
            </div>

            <div className='font-bold mt-4'>Applications</div>
            <table className='w-full table-auto'>
                <thead>
                    <tr className='text-sm text-left'>
                        <th>Band</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((application: any) => {
                        return (
                            <tr key={application.id}>
                                <td>
                                    {application.band.name}
                                </td>
                                <td>
                                    {application.status}
                                </td>
                                <td>
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
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </>
    )
}