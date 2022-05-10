import { configureStore } from '@reduxjs/toolkit';
import authReducer from './features/authSlice';
import bandsReducer from './features/bandsSlice';
import venuesReducer from './features/venuesSlice';
import optionItemsReducer from './features/optionItemsSlice';

export default configureStore({
  reducer: {
      auth: authReducer,
      bands: bandsReducer,
      venues: venuesReducer,
      optionItems: optionItemsReducer
  },
});