import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { data } from "../services/data";
import type { ListingType } from "../types/ListingType";

export const fetchListing = createAsyncThunk(
    "listing/fetch",
    async (listingId: number) => await data.getListing(listingId)
);

type ListingState = {
    listing: ListingType | null;
    isLoading: boolean;
    isError: boolean;
};

const initialState: ListingState = {
    listing: null,
    isLoading: false,
    isError: false,
};

const listingSlice = createSlice({
    name: "listing",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchListing.pending, (state) => {
                state.isLoading = true;
                state.isError = false;
            })
            .addCase(fetchListing.fulfilled, (state, action) => {
                state.isLoading = false;
                state.listing = action.payload;
            })
            .addCase(fetchListing.rejected, (state) => {
                state.isLoading = false;
                state.isError = true;
            });
    },
});

export const listingReducer = listingSlice.reducer;
