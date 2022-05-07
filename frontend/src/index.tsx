/*
 * Copyright 2021 Google LLC. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import * as React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'

import store from './store'
import App from './App';

import BandCreate from "./routes/band/Create";
import BandSubmissionConfirmation from "./routes/band/Confirmation";
import BandsList from "./routes/band/List";
import BandProfile from "./routes/band/Profile";

import VenueCreate from "./routes/venue/Create";
import VenueSubmissionConfirmation from "./routes/venue/Confirmation";
import VenuesList from "./routes/venue/List";
import VenueProfile from "./routes/venue/Profile";

import ConfirmGigSubmission from "./routes/gig/Confirmation";

import UserRegistration from "./routes/user/Registration";
import UserLogin from "./routes/user/Login";
import UserSettings from "./routes/user/Settings";
import MapView from "./routes/MapView";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<MapView />} />

            <Route path="register" element={<UserRegistration />} />
            <Route path="login" element={<UserLogin />} />
            <Route path="settings" element={<UserSettings />} />

            <Route path="new_venue" element={<VenueCreate />} />
            <Route path="new_venue_confirm" element={<VenueSubmissionConfirmation />} />
            <Route path="venues" element={<VenuesList />}>
              <Route path=":venueId" element={<VenueProfile />} />
            </Route>

            <Route path="new_band" element={<BandCreate />} />
            <Route path="new_band_confirm" element={<BandSubmissionConfirmation />} />
            <Route path="bands" element={<BandsList />}>
              <Route path=":bandId" element={<BandProfile />} />
            </Route>

            <Route path="new_gig_confirm" element={<ConfirmGigSubmission />} />
          </Route>
        </Routes>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

export { };
