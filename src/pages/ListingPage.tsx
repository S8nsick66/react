import "./Listings.css";
import { useEffect } from "react";
import { useAppSelector, useAppDispatch } from '../store/hooks';
import { useParams } from "react-router-dom";
import { fetchListing} from "../slices/listingSlice";
import { Listing } from "../components/Listing/Listing";

export function ListingPage(){
    const dispatch = useAppDispatch();
    const { id } = useParams<{ id: string }>();
    const listingId = id ? Number(id) : 0;
    const { listing, isLoading, isError } = useAppSelector(state => state.listing);

    useEffect(() => {
        if (listingId === 0 || Number.isNaN(listingId)) {
            return;
        }
        dispatch(fetchListing(listingId));
    }, [listingId, dispatch]);

    if (!listing || isLoading) {
        return <p>Loading...</p>;
    }

    if (isError) {
        return <p>Something went wrong</p>;
    }

    return (
        <Listing listing={listing} />
    );
}
