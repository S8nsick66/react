import { createSlice } from "@reduxjs/toolkit";
import { data } from "../services/data";

export const isFavorite = (favorites: number[], listingId: number) => {
    return favorites.includes(listingId);
};

export const favoriteSlice = createSlice({
    name: "favorites",
    initialState: {
        favorites: data.getFavorites(),
    },
    reducers: {
        addFavorite: (state, action) => {
            state.favorites.push(action.payload);
        },
        removeFavorite: (state, action) => {
            state.favorites = state.favorites.filter(fav => fav !== action.payload);
        }
    },
});

export const { addFavorite, removeFavorite } = favoriteSlice.actions;
export const favoriteReducer = favoriteSlice.reducer;
