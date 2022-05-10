type GigsType = {
    name: string;
    payment: string;
    genre: string;
    description: string;
    start_date: string;
    end_date: string;
}
type GigListType = {
    gigs: Array<GigsType>;
}
export default function GigList(params: GigListType) {
    return (<>
        <h3 className='font-bold tracking-wide'>Gigs List</h3>
        {params.gigs.length ?
            <ul>
                {params.gigs.map((gig: any) => {
                    return <li key={gig.id}>{gig.name}</li>
                })}
            </ul>
            : <div>No gigs</div>
        }
    </>)
}