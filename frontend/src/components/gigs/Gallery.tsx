import { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { GigsDataType } from '../../custom'
import { setActive, setVenue, setGig } from '../../features/modalSlice'
import iconCalendar from '../../assets/icon/calendar.svg'
type VenueData = {
    id: number;
    name: string;
}
type GigGalleryType = {
    venue: VenueData;
    gigs: Array<GigsDataType>;
    updatePayment: (e: any) => void;
}
export default function GigGallery(params: GigGalleryType) {
    const dispatch = useDispatch();
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
        const event = new Date(dateString)
        return (
            <div>
                <div className='text-sm'>{monthAbbreviations[event.getMonth()]}</div>
                <div className='font-bold text-lg'>{event.getDate()}</div>
                {/* `${event.getMonth() + 1}-${event.getDate()}-${event.getFullYear()} @${event.getHours()}:${event.getMinutes()}` */}
            </div>
        )
    }
    function simpleTime(dateStartString: string, dateEndString: string) {
        const eventStart = new Date(dateStartString)
        const eventEnd = new Date(dateEndString)
        const startHours = eventStart.getHours()
        const startMinutes = eventStart.getMinutes()
        const endHours = eventEnd.getHours()
        const endMinutes = eventEnd.getMinutes()
        return (
            <div className="text-sm">
                {startHours}:{startMinutes > 10 ? startMinutes : `0${startMinutes}`} {startHours > 11 ? 'pm' : 'am'} - {endHours}:{endMinutes > 10 ? endMinutes : `0${endMinutes}`} {endHours > 11 ? 'pm' : 'am'}
            </div>
        )
    }

    function showModal(gigId: number) {
        dispatch(setActive(true));
        dispatch(setVenue(params.venue));
        dispatch(setGig(params.gigs.filter((g: any) => g.id == gigId)[0]));
    }

    function showGalleryItem(itemIndex: number) {
        const gig = params.gigs.filter((g: any, index: number) => index == itemIndex)[0];
        params.updatePayment(gig.payment)
    }

    useEffect(() => {
        showGalleryItem(0)
    }, [])

    return (
        <div className="mt-2">
            <div className="overflow-hidden">
                <div className="flex relative">
                    {params.gigs.map((gig, index: number) => {
                        return (
                            <div key={gig.id} className="shrink-0 w-full">
                                <div className="flex items-center">
                                    {/* <img src={iconCalendar} alt="Calendar" className='w-4 h-4' /> */}
                                    <div className='text-center px-3 shrink-0 border-r-2 mr-auto'>
                                        {simpleDate(gig.start_date)}
                                    </div>
                                    <div>
                                        <div className='font-bold'>{gig.name}</div>
                                        {simpleTime(gig.start_date, gig.end_date)}
                                    </div>
                                </div>
                                <div className="flex items-center mt-2">
                                    <div className='text-sm'>
                                        {`Gig ${index + 1} of ${params.gigs.length}`}
                                    </div>
                                    <div className="ml-auto">
                                        <button onClick={() => {
                                            showModal(gig.id)
                                        }} className='font-fenwick border-blue-500 text-blue-500 rounded border-2 px-2 py-1 text-sm'>Apply</button>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}