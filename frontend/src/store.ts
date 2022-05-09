import { configureStore } from '@reduxjs/toolkit';
import authReducer from './features/authSlice';
import bandsReducer from './features/bandsSlice';
import venuesReducer from './features/venuesSlice';

export default configureStore({
  reducer: {
      auth: authReducer,
      bands: bandsReducer,
      venues: venuesReducer
  },
});