import { combineReducers, configureStore } from "@reduxjs/toolkit";
import bookingReducer from "./slices/bookingSlice";
import { moviesApi } from "../services/moviesApi";
import { persistStore, persistReducer, PersistConfig } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig: PersistConfig<any> = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  bookings: bookingReducer,
  [moviesApi.reducerPath]: moviesApi.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const persistedReducer = persistReducer<RootState>(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat([moviesApi.middleware]),
});

export const persistor = persistStore(store);

export default store;
