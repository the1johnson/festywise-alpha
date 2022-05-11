import React from "react";
import GigGallery from './gigs/Gallery'
import { GigsDataType } from '../custom'

interface VenueCardProps {
    name: string;
    genre: string;
    capacity: number;
    image_url: string;
    gigs: Array<GigsDataType>;
}
class VenueCard extends React.Component<VenueCardProps> {
    render() {
        return (
            <div className="mt-4 bg-zinc-50 border-zinc-900 border-2 rounded overflow-hidden shadow hover:shadow-lg transition duration-150">
                <img src={this.props.image_url} alt="TODO: Venue" />
                <div className="p-2">
                    <div className="flex items-center">
                        <div><strong>{this.props.name}</strong></div>
                        <div className="ml-auto text-sm"><strong>Capacity:</strong> {this.props.capacity}</div>
                    </div>
                    <GigGallery gigs={this.props.gigs} />
                </div>
            </div>
        );
    }
}

export default VenueCard;