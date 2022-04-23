import * as React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import VenueProfile from "./routes/VenueProfile";
import ArtistProfile from "./routes/ArtistProfile";
import MapView from "./routes/MapView";
import "./App.css";


export default function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<MapView />} />
        <Route path="venue" element={<VenueProfile />} />
        <Route path="artist" element={<ArtistProfile />} />
      </Routes>
    </>
  );
}