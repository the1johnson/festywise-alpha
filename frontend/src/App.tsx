import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import CreateVenue from "./routes/create/Venue";
import CreateArtist from "./routes/create/Artist";
import VenueProfile from "./routes/VenueProfile";
import ArtistProfile from "./routes/ArtistProfile";
import UserRegistration from "./routes/user/Registration";
import UserLogin from "./routes/user/Login";
import UserSettings from "./routes/user/Settings";
import MapView from "./routes/MapView";
import "./App.css";


export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<MapView />} />
        <Route path="new_venue" element={<CreateVenue />} />
        <Route path="new_artist" element={<CreateArtist />} />
        <Route path="venue" element={<VenueProfile />} />
        <Route path="artist" element={<ArtistProfile />} />
        <Route path="register" element={<UserRegistration />} />
        <Route path="login" element={<UserLogin />} />
        <Route path="settings" element={<UserSettings />} />
      </Routes>
    </>
  );
}