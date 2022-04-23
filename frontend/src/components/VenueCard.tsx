import React from "react";
interface VenueCardProps {
    name: string;
    date: string;
    startTime: string;
    endTime: string;
    genre: string;
    capacity: number;
    imageUrl: string;
}
class VenueGallery extends React.Component<VenueCardProps> {
    render() {
        return (
            <div className="mt-4 bg-zinc-50 border-zinc-900 border-2 rounded overflow-hidden shadow hover:shadow-lg transition duration-150">
                <img src={this.props.imageUrl} alt="TODO: Venue" />
                <div className="p-2">
                    <div className="font-bold">{this.props.name}</div>
                    <ul className="text-sm">
                        <li><strong>Date:</strong> {this.props.startTime} - {this.props.endTime}</li>
                        <li><strong>Genere:</strong> {this.props.genre}</li>
                        <li><strong>Capacity:</strong> {this.props.capacity}</li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default VenueGallery;