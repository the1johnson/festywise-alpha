import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import useFetch from '../../hooks/useFetch';
import SelectFormGroup from '../../components/form/SelectFormGroup';
import { setActive } from '../../features/modalSlice'

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
                if(actualData.application){
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
                    <div onClick={hideModal} className='font-bold text-lg cursor-pointer absolute top-0 right-2'>x</div>
                    {venue && gig && data.length ?
                        <div>
                            {hasApllied ?
                                <div>
                                    Thanks for applying
                                </div> : <div>
                                    <div>Are you sure you want to apply at: {venue.name}</div>
                                    <div>For the gig: {gig.name}</div>
                                    <div>Start Time: {gig.start_date}</div>
                                    <div>End Time: {gig.end_date}</div>
                                    <SelectFormGroup fieldName="bandId" onChange={setBandId} displayLabel='Band' fieldValue={bandId} optionItems={bandSelectOptions} />
                                    <div className='flex mt-4'>
                                        <button onClick={hideModal} className='ml-auto justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-900'>Cancel</button>
                                        <button onClick={sendApplication} className='ml-5 justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700'>Apply</button>
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