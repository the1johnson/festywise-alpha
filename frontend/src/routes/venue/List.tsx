import React from 'react';
import GenericWrapper from '../../components/GenericWrapper';
import { Outlet } from "react-router-dom";

export default function VenuesList() {
    return (
        <GenericWrapper>
            <div>
                All Venues
                <Outlet />
            </div>
        </GenericWrapper>
    );
}