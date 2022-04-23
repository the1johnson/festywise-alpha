import * as React from "react";
import { useEffect } from "react";
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import Map from "../components/Map";
import Marker from "../components/Marker";
import VenueCard from "../components/VenueCard";
import venueJson from "../assets/venue.json";

const render = (status: Status) => {
  return <h1>{status}</h1>;
};

const MapView: React.FC = () => {
  const google = window.google;
  const [clicks, setClicks] = React.useState<google.maps.LatLng[]>([]);
  // const [venueData, setVenueData] = React.useState(venueJson) ;
  const [venueData] = React.useState(venueJson);
  const [zoom, setZoom] = React.useState(14); // initial zoom
  const [center, setCenter] = React.useState<google.maps.LatLngLiteral>({
    lat: 37.7749,
    lng: -122.4194,
  });

  const onIdle = (m: google.maps.Map) => {
    // console.log("onIdle");
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
  }, [google, venueData]);

  return (
    <div style={{ display: "flex" }}>
      <div className="100vh px-4 w-64 overflow-y-auto bg-zinc-400">
        {venueData.map((venue, i: number) => (
          <VenueCard key={i} {...venue} />
        ))}
      </div>

      <Wrapper apiKey={"AIzaSyCSEMcdJBfR8mZMzVOHEq3OlQT2tAhfxw4"} render={render}>
        <Map
          center={center}
          onIdle={onIdle}
          zoom={zoom}
          style={{ flexGrow: "1", height: "100vh" }}
        >
          {clicks.map((latLng, i) => (
            <Marker key={i} position={latLng} />
          ))}
        </Map>
      </Wrapper>
    </div>
  );
};

export default MapView;