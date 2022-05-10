import { useState } from 'react';
import { useSelector } from 'react-redux';
import TextInputFormGroup from '../../components/form/TextInputFormGroup';
import TextAreaFormGroup from '../../components/form/TextAreaFormGroup';
import SelectFormGroup from '../../components/form/SelectFormGroup';
import DateTimeFormGroup from '../../components/form/DateTimeFormGroup';
type AddGigToVenueFormType = {
    venueId: string | undefined;
}
export default function AddGigToVenueForm(params: AddGigToVenueFormType) {
    const nowTime = new Date();
    const [name, setName] = useState('');
    const [payment, setPayment] = useState('');
    const [genre, setGenre] = useState('');
    const [description, setDescription] = useState('');
    const [startDate, setStartDate] = useState(nowTime.toISOString().substring(0, 16));
    const [endDate, setEndDate] = useState(nowTime.toISOString().substring(0, 16));
    const genreOptionItems = useSelector((state: any) => state.optionItems.genre);
    return (
        <form className='mt-4'>
            <h3 className='font-bold tracking-wide'>Add Gig</h3>
            <TextInputFormGroup fieldName='name' onChange={setName} displayLabel="Name" fieldValue={name} />
            <TextInputFormGroup fieldName='payment' onChange={setPayment} displayLabel="Payment" fieldValue={payment} />
            <SelectFormGroup fieldName="genre" onChange={setGenre} displayLabel='Preferred Genre' fieldValue={genre} optionItems={genreOptionItems} />
            <TextAreaFormGroup fieldName='description' onChange={setDescription} displayLabel="Description" fieldValue={description} />
            <DateTimeFormGroup dateFieldName="start_date" displayLabel="Start Time" dateFieldValue={startDate} onDateChange={setStartDate} />
            <DateTimeFormGroup dateFieldName="end_date" displayLabel="End Time" dateFieldValue={endDate} onDateChange={setEndDate} />
            <div className='flex'>
                <input type="submit" value="Submit" className='ml-auto justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500' />
            </div>
        </form>
    )
}