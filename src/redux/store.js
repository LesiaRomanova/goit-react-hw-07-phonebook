import contactsReducer from './contacts/contacts-reducer';
import logger from 'redux-logger';
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),

  logger,
];

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
  middleware: middleware,
  devTools: process.env.NODE_ENV === 'development',
});

export default store;
