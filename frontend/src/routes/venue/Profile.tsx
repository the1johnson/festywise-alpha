import React from 'react';
import { useParams } from "react-router-dom";

export default function VenueProfile() {
    const params = useParams();

    return (
        <>
            Venue Profile: {params.venueId}
        </>
    );
}
