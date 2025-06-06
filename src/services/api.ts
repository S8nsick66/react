const API_BASE_URL = "https://utvbutiken.fasadweb.se/wp-json/";

import type {ListingListType} from "../types/ListingListType";
import type {ListingType} from "../types/ListingType";

async function getListings(): Promise<ListingListType[]> {
    const response = await fetch(`${API_BASE_URL}api/v1/listing`);
    const data = await response.json();
    const filtered = (data as ListingListType[]).filter(listing => {
        return listing.rooms;
    });

    // Normalize `id` to number
    return filtered.map(listing => ({
        ...listing,
        id: Number(listing.data.listingId),
    })) as ListingListType[];
}

async function getListing(listingId: number): Promise<ListingType> {
    const response = await fetch(`${API_BASE_URL}api/v1/listing/${listingId}`);
    const data = await response.json();

    // Normalize `id` to number
    return {
        ...data,
        id: Number(data.id),
    } as ListingType;
}

async function getPage(pageSlug: string): Promise<any> {
    const response = await fetch(`${API_BASE_URL}wp/v2/pages?slug=${pageSlug}`);
    return await response.json();
}

export const api = {
    getListings,
    getListing,
    getPage
};
