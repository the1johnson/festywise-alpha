import { useSelector, useDispatch } from 'react-redux';
import useFetch from '../../hooks/useFetch';
import {setActive} from '../../features/modalSlice'

type GigApplicationModalType = {
    isActive: boolean;
}
export default function GigApplicationModal(params:GigApplicationModalType){
    const dispatch = useDispatch();
    const userId = useSelector((state: any) => state.auth.userId);
    const {data, loading} = useFetch(`${process.env.REACT_APP_AJAX_URL}/users/${userId}/bands`);
    function hideModal(){
        dispatch(setActive(false));
    }
    return (
        <>
            <div onClick={hideModal} className={`fixed w-screen h-screen z-50 bg-black opacity-80 top-0 left-0 ${params.isActive ? "block" : "hidden"}`}></div>
            <div className={`fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 w-2/3 ${params.isActive ? "block" : "hidden"}`}>
                <div className="relative bg-white rounded-lg p-4">
                    <div onClick={hideModal} className='font-bold text-lg cursor-pointer absolute top-0 right-2'>x</div>
                    text
                </div>
            </div>
        </>
    )
}