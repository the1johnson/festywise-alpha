import { useDispatch } from 'react-redux';
import { GigsDataType } from '../../custom'
import {setActive} from '../../features/modalSlice'

type GigGalleryType = {
    gigs: Array<GigsDataType>;
}
export default function GigGallery(params: GigGalleryType) {
    const dispatch = useDispatch();
    function simpleDate(dateString: string) {
        const event = new Date(dateString)

        return `${event.getMonth() + 1}-${event.getDate()}-${event.getFullYear()} @${event.getHours()}:${event.getMinutes()}`
    }
    function showModal(){
        dispatch(setActive(true));
    }
    return (
        <div className="py-2">
            <div className="overflow-hidden">
                <div className="flex relative">
                    {params.gigs.map((gig) => {
                        return (
                            <div key={gig.id} className="shrink-0 w-full">
                                <div className="flex items-center">
                                    <div className="font-bold text-lg">{gig.name}</div>
                                    <div className="ml-auto">
                                        <button onClick={showModal} className='ml-auto justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>Apply</button>
                                    </div>
                                </div>
                                <div className="text-xs">
                                    <div><strong>Start:</strong> {simpleDate(gig.start_date)}</div>
                                    <div><strong>End:</strong> {simpleDate(gig.end_date)}</div>
                                </div>

                            </div>
                        )
                    })}
                </div>
            </div>
            <ul className="flex justify-around mt-3">
                {params.gigs.map((gig) => {
                    return (<li key={gig.id}><div className="h-3 w-3 rounded-full bg-zinc-600"></div></li>)
                })}
            </ul>
        </div>
    )
}