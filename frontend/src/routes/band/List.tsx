import React from 'react';
import GenericWrapper from '../../components/GenericWrapper';
import { Outlet } from "react-router-dom";

export default function BandsList() {
    return (
        <GenericWrapper>
            <div>
                All Bands
                <Outlet />
            </div>
        </GenericWrapper>
    );
}