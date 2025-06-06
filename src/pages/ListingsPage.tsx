import "./Listings.css";
import { useEffect } from "react";
import { useAppSelector, useAppDispatch } from '../store/hooks';
import { fetchListings } from "../slices/listingsSlice";
import { ListingList } from "../components/ListingList/ListingList";
import { ListingsFilter } from "../components/ListingsSortFilter/ListingsFilter";
import { ListingsSort } from "../components/ListingsSortFilter/ListingsSort";

export function ListingsPage() {
    const dispatch = useAppDispatch();
    const { listings, isLoading, isError } = useAppSelector(state => state.listings);
    const favorites = useAppSelector(state => state.favorites.favorites);
    const filter = useAppSelector(state => state.listings.filter);

    const filteredListings = filter === 'favorites'
        ? listings.filter(listing => favorites.includes(listing.id))
        : listings;

    useEffect(() => {
        dispatch(fetchListings());
    }, [dispatch]);

    const listingsComponents = filteredListings?.map((listing) => {
        return (
            <ListingList key={listing.id} listing={listing} />
        );
    });

    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Something went wrong</div>;

    return (
        <>
            <div className="flex justify-between items-center my-4">
                <ListingsFilter />
                <ListingsSort />
            </div>
            <section className="products grid grid-cols-1 md:grid-cols-2 gap-6">{listingsComponents}</section>
        </>
    );
}
