import React, { useState } from "react";
import GigGallery from './gigs/Gallery'
import { GigsDataType } from '../custom'

interface VenueCardProps {
    id: number;
    name: string;
    genre: string;
    capacity: number;
    image_url: string;
    gigs: Array<GigsDataType>;
}
export default function VenueCard(params: VenueCardProps) {
    const [gigPayment, setGigPayment] = useState('');
    return (
        <div className="mt-4 rounded bg-white overflow-hidden shadow hover:shadow-lg">
            <div className="relative">
                <img src={params.image_url} alt={`${params.name}'s Venue Image`} />
                <div className="absolute bottom-2 right-2 bg-white p-1 rounded-sm">{gigPayment}</div>
            </div>

            <div className="py-2 px-4">
                <div className="font-bold text-lg">{params.name}</div>
                <GigGallery venue={params} gigs={params.gigs} updatePayment={setGigPayment} />
            </div>
        </div>
    );
}
