import { GigsDataType } from '../../custom'
type GigListType = {
    gigs: Array<GigsDataType>;
    toProfileTab: (id: number) => void;
}
export default function GigList(params: GigListType) {
    function showGigProfile(id: number) {
        params.toProfileTab(id)
    }
    return (<>
        {params.gigs.length ?
            <ul className="list-disc list-inside">
                {params.gigs.map((gig: any) => {
                    return (<li className="cursor-pointer" key={gig.id} onClick={() => {
                        showGigProfile(gig.id)
                    }}>{gig.name}</li>)
                })}
            </ul>
            : <div>No gigs</div>
        }
    </>)
}