import { configureStore } from "@reduxjs/toolkit";
import { listingsReducer } from "../slices/listingsSlice";
import { listingReducer } from "../slices/listingSlice";
import { favoriteReducer } from "../slices/favoriteSlice";

export const store = configureStore({
    reducer: {
        listings: listingsReducer,
        listing: listingReducer,
        favorites: favoriteReducer
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
