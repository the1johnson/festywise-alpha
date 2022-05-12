type GenericHeadingType = {
    label: string;
}
export default function GenericHeading(params:GenericHeadingType) {
    return (
        <div className='text-xl font-bold'>
            {params.label}
        </div>
    )
}