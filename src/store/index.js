import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import user from './slicers/user.slicer';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { apiSlice } from './slicers/apiSlice';
import allOrders from './slicers/allOrders.slicer';
import allUsers from './slicers/allUsers.slicer';
import inputSearchText from './slicers/inputSearchText.slicer';

const rootReducer = combineReducers({
  [user.name]: user.reducer,
  [allOrders.name]: allOrders.reducer,
  [apiSlice.reducerPath]: apiSlice.reducer,
  [allUsers.name]: allUsers.reducer,
  [inputSearchText.name]: inputSearchText.reducer,
});

const persistConfig = {
  key: 'root',
  storage,
  blacklist: [apiSlice.reducerPath],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) => {
    const middlewares = getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: ['persist/PERSIST'],
      },
    });
    middlewares.push(apiSlice.middleware);
    return middlewares;
  },
});

export const persistor = persistStore(store);
