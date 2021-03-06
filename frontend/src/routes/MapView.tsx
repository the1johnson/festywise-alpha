import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import Map from "../components/Map";
import Marker from "../components/Marker";
import VenueCard from "../components/VenueCard";
import useFetch from '../hooks/useFetch';
import { setVenues } from '../features/venuesSlice';
import GigApplicationModal from '../components/gigs/ApplicationModal'
import venueJson from "../assets/venue.json";

const render = (status: Status) => {
  return <h1>{status}</h1>;
};

const MapView: React.FC = () => {
  const google = window.google;
  const dispatch = useDispatch();
  const [clicks, setClicks] = useState<google.maps.LatLng[]>([]);
  const { data, loading } = useFetch(`${process.env.REACT_APP_AJAX_URL}/all_venues`);
  const venueData = data;
  const modalIsActive = useSelector((state: any) => state.modal.is_active);
  const [zoom, setZoom] = useState(14); // initial zoom
  const [center, setCenter] = useState<google.maps.LatLngLiteral>({
    lat: 37.7749,
    lng: -122.4194,
  });
  const applicationVenue = useSelector((state: any) => state.modal.venue);
  const applicationGig = useSelector((state: any) => state.modal.gig);

  const onIdle = (m: google.maps.Map) => {
    setZoom(m.getZoom()!);
    setCenter(m.getCenter()!.toJSON());
  };
  interface venueDataProps {
    lat: number;
    lng: number;
  }
  useEffect(() => {
    if (google) {
      venueData.map((venue: venueDataProps) => {
        setClicks(clicks => [...clicks, new google.maps.LatLng(venue.lat, venue.lng)])
        return venue;
      });
    }
    dispatch(setVenues(data));
  }, [google, venueData]);

  return (
    <>
      <div style={{ display: "flex" }}>
        <div className="h-screen px-4 w-64 overflow-y-auto bg-zinc-400">
          {venueData.map((venue, i: number) => (
            <VenueCard key={i} {...venue} />
          ))}
        </div>

        <Wrapper apiKey={process.env.REACT_APP_GOOGLE_API_KEY as string} render={render}>
          <Map
            center={center}
            onIdle={onIdle}
            zoom={zoom}
            style={{ flexGrow: "1", height: "100vh" }}
            styles={[
              {
                featureType: "poi",
                stylers: [{ visibility: "off" }],
              }
            ]}
          >
            {clicks.map((latLng, i) => (
              <Marker key={i} position={latLng} />
            ))}
          </Map>
        </Wrapper>
      </div>
      {applicationVenue && applicationGig ?
        <GigApplicationModal isActive={modalIsActive} key={`${applicationVenue.id}_${applicationGig.id}`} />
        : <></>
      }

    </>
  );
};

export default MapView;