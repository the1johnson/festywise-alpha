import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import useFetch from '../../hooks/useFetch';
import SelectFormGroup from '../../components/form/SelectFormGroup';
import GenericHeading from '../GenericHeading'
import { setActive } from '../../features/modalSlice'
import iconCloseModalSVG from '../../assets/icon/closeModal.svg'

type GigApplicationModalType = {
    isActive: boolean;
}
export default function GigApplicationModal(params: GigApplicationModalType) {
    const dispatch = useDispatch();
    const userId = useSelector((state: any) => state.auth.userId);
    const venue = useSelector((state: any) => state.modal.venue);
    const gig = useSelector((state: any) => state.modal.gig);
    const { data, loading } = useFetch(`${process.env.REACT_APP_AJAX_URL}/users/${userId ? userId : 1}/bands`);
    const [bandId, setBandId] = useState('');
    const [hasApllied, setHasApllied] = useState(false);
    const bandSelectOptions = data.map((band: any, i: number) => {
        return { id: band.id, label: band.name, value: band.id }
    })
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
    function hideModal() {
        dispatch(setActive(false));
    }
    function sendApplication() {
        const getData = async () => {
            try {
                const response = await fetch(
                    `${process.env.REACT_APP_AJAX_URL}/gigs/${gig.id}/gig_applications`,
                    {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                            band_id: bandId,
                            status: "pending"
                        })
                    }
                );
                let actualData = await response.json();
                if (actualData.application) {
                    setHasApllied(true)
                }
            } catch (err: any) {

            }
        }
        getData();
    }
    return (
        <>
            <div onClick={hideModal} className={`fixed w-screen h-screen z-50 bg-black opacity-80 top-0 left-0 ${params.isActive ? "block" : "hidden"}`}></div>
            <div className={`fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 w-2/3 ${params.isActive ? "block" : "hidden"}`}>
                <div className="relative bg-white rounded-lg p-4">
                    <div onClick={hideModal} className='cursor-pointer absolute top-2 right-2'>
                        <img src={iconCloseModalSVG} alt="" />
                    </div>
                    {venue && gig && data.length ?
                        <div>
                            {hasApllied ?
                                <div>
                                    <div className='border-2 rounded bg-emerald-100/80 p-4 m-4 text-emerald-900'>
                                        <GenericHeading label="Applied to Gig" />
                                        Your application has been sent to {venue.name}. You will recieve a notification if you are approved to play.
                                    </div>
                                </div> : <div className='flex'>
                                    <div className='w-48 shrink-0 pr-4'>
                                        <img className='block' src={venue.image_url} alt={`${venue.name}'s Venue Image`} />
                                        <div className='font-bold mt-2'>{venue.name}</div>
                                        <address className='text-sm my-2'>
                                            {venue.street_address}<br />
                                            {venue.city}, {venue.state} {venue.zip}
                                        </address>
                                        <div>Capacity: {venue.capacity}</div>
                                    </div>
                                    <div className='border-l-2 pl-4'>
                                        <GenericHeading label="Gig Application" />
                                        <div className='flex grid grid-cols-3 gap-3 mt-4'>
                                            <div className='font-bold text-lg'>Name</div>
                                            <div className='col-span-2'>{gig.name}</div>

                                            <div className='font-bold'>Description</div>
                                            <div className='col-span-2'>{gig.description}</div>

                                            <div className='font-bold'>Start Time</div>
                                            <div className='col-span-2'>{simpleDate(gig.start_date)}</div>

                                            <div className='font-bold'>End Time</div>
                                            <div className='col-span-2'>{simpleDate(gig.end_date)}</div>

                                            <SelectFormGroup
                                                fieldName="bandId"
                                                onChange={setBandId}
                                                displayLabel='Band'
                                                fieldValue={bandId}
                                                optionItems={bandSelectOptions}
                                                labelClassList="font-bold"
                                                selectClassList="col-span-2 p-2 rounded-md shadow-sm block w-full border border-gray-300"
                                            />
                                        </div>

                                        <div className='flex mt-4 items-center text-sm font-fenwick'>
                                            <button onClick={hideModal} className='ml-auto text-zinc-600'>Cancel</button>
                                            <button onClick={sendApplication} className='ml-5 border-emerald-500 text-emerald-500 rounded border-2 px-2 py-1'>Confirm</button>
                                        </div>
                                    </div>
                                </div>
                            }
                        </div> : <div>Need to login</div>
                    }

                </div>
            </div>
        </>
    )
}