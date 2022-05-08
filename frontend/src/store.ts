import { configureStore } from '@reduxjs/toolkit';
import authReducer from './features/authSlice';
import bandsReducer from './features/bandsSlice';

export default configureStore({
  reducer: {
      auth: authReducer,
      bands: bandsReducer
  },
});