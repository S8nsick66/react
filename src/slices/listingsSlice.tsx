import { createSlice, createAsyncThunk, type PayloadAction } from "@reduxjs/toolkit";
import { data } from "../services/data";
import type { ListingListType } from "../types/ListingListType";
import type { OrderKey } from "../types/OrderOptions";

export const fetchListings = createAsyncThunk(
    "listings/fetch",
    async () => await data.getListings()
);

type ListingsState = {
    listings: ListingListType[];
    filteredListings: ListingListType[];
    isLoading: boolean;
    isError: boolean;
    order: OrderKey;
    filter: string;
};

const initialState: ListingsState = {
    listings: [],
    filteredListings: [],
    isLoading: false,
    isError: false,
    order: data.getOrder(),
    filter: data.getFilter()
};

// Internal function to sort listings based on key
function sortListings(
    listings: ListingListType[],
    key: OrderKey
): ListingListType[] {
    return [...listings].sort((a, b) => {
        const aVal = a[key];
        const bVal = b[key];
        if (typeof aVal === 'number' && typeof bVal === 'number') {
            return bVal - aVal;
        }
        return String(bVal).localeCompare(String(aVal));
    });
}

const listingsSlice = createSlice({
    name: "listings",
    initialState,
    reducers: {
        setOrder: (state, action: PayloadAction<OrderKey>) => {
            state.order = action.payload;
            state.listings = sortListings(state.listings, action.payload);
        },
        setFilter: (state, action: PayloadAction<string>) => {
            state.filter = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchListings.pending, (state) => {
                state.isLoading = true;
                state.isError = false;
            })
            .addCase(fetchListings.fulfilled, (state, action) => {
                state.isLoading = false;
                // Set the listings and set initial order by date
                state.listings = sortListings(action.payload, initialState.order);
            })
            .addCase(fetchListings.rejected, (state) => {
                state.isLoading = false;
                state.isError = true;
            });
    },
});

export const { setOrder, setFilter } = listingsSlice.actions;
export const listingsReducer = listingsSlice.reducer;
