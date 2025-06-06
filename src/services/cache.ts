// will read/write to/from localStorage

import type { ListingType } from '../types/ListingType';
import type { ListingListType } from '../types/ListingListType';
import type { OrderKey } from "../types/OrderOptions";
import type { PageType } from "../types/PageType";

function getListings(): ListingListType[]|false {
    const listings = localStorage.getItem('listings');
    return listings ? JSON.parse(listings) : false;
}

function saveListings(listings: ListingListType[]) {
    localStorage.setItem('listings', JSON.stringify(listings));
}

function getListing(listingId: number) {
    const listings = localStorage.getItem('listing:' + listingId);
    return listings ? JSON.parse(listings) : false;
}

function saveListing(listing: ListingType) {
    localStorage.setItem('listing:' + listing.id, JSON.stringify(listing));
}

function getOrder(): string|null {
    const order = localStorage.getItem('order');
    if (order) {
        return order;
    }
    return null;
}

function saveOrder(order: OrderKey) {
    localStorage.setItem('order', order);
}

function getFilter(): string|null {
    const filter = localStorage.getItem('filter');
    return filter ? filter : null;
}

function saveFilter(filter: string) {
    localStorage.setItem('filter', filter);
}

function getPage(pageSlug: string): PageType | 'NOT_FOUND' | null {
    const page = localStorage.getItem('page:' + pageSlug);
    return page ? JSON.parse(page) : null;
}

function savePage(pageSlug: string, page: PageType | 'NOT_FOUND') {
    localStorage.setItem('page:' + pageSlug, JSON.stringify(page));
}

function getFavorites(): number[] {
    const favorites = localStorage.getItem('favorites');
    return favorites ? JSON.parse(favorites) : [];
}

function saveFavorites(favorites: number[]) {
    localStorage.setItem('favorites', JSON.stringify(favorites));
}

export const cache = {
    getListings,
    saveListings,
    getListing,
    saveListing,
    getOrder,
    saveOrder,
    getFilter,
    saveFilter,
    getPage,
    savePage,
    getFavorites,
    saveFavorites
}
