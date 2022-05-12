import {GigsDataType} from '../../custom'
type GigListType = {
    gigs: Array<GigsDataType>;
    toProfileTab: (id:number) => void;
}
export default function GigList(params: GigListType) {
    function showGigProfile(id:number){
        params.toProfileTab(id)
    }
    return (<>
        <div>Gigs List</div>
        {params.gigs.length ?
            <ul>
                {params.gigs.map((gig: any) => {
                    return (<li className="cursor-pointer" key={gig.id} onClick={()=>{
                        showGigProfile(gig.id)
                    }}>{gig.name}</li>)
                })}
            </ul>
            : <div>No gigs</div>
        }
    </>)
}