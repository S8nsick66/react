// Will fetch data to slices
// will check cache first, then api, and save to cache

// for favourites, only cache

import { cache } from './cache';
import { api } from './api';
import {isValidOrderKey, type OrderKey, OrderOptions} from "../types/OrderOptions";
import type {PageType} from "../types/PageType.ts";

async function getListings() {
    let listings = cache.getListings();
    if (listings === false) {
        listings = await api.getListings();
        cache.saveListings(listings);
    }
    return listings;
}

async function getListing(listingId: number) {
    let listing = cache.getListing(listingId);
    if (listing === false) {
        listing = await api.getListing(listingId);
        cache.saveListing(listing);
    }
    return listing;
}

function getOrder(): OrderKey {
    const order = cache.getOrder();
    const defaultOrder: OrderKey = OrderOptions[0].key;
    if (!order || !isValidOrderKey(order)) {
        cache.saveOrder(defaultOrder);
        return defaultOrder;
    }
    return order;
}

function saveOrder(order: OrderKey) {
    if (isValidOrderKey(order)) {
        cache.saveOrder(order);
    }
}

function getFilter(): string {
    const filter = cache.getFilter();
    if (!filter) {
        return 'all';
    }
    return filter;
}

function saveFilter(filter: string) {
    if (!filter) {
        filter = 'all';
    }
    cache.saveFilter(filter);
}

async function getPage(pageSlug: string|null): Promise<PageType | null> {
    if (!pageSlug) {
        throw new Error("Page slug cannot be null");
    }

    let page = cache.getPage(pageSlug);

    if (page === 'NOT_FOUND') {
        return null;
    }

    if (!page) {
        const result = await api.getPage(pageSlug);
        if (Array.isArray(result) && result.length > 0) {
            page = result[0] as PageType;
            cache.savePage(pageSlug, page);
        } else {
            cache.savePage(pageSlug, 'NOT_FOUND');
            return null;
        }
    }
    return page;
}

function getFavorites(): number[] {
    const favorites = cache.getFavorites();
    if (!favorites) {
        return [];
    }
    return favorites;
}

function saveFavorites(favorites: number[]) {
    cache.saveFavorites(favorites);
}

export const data = {
    getListings,
    getListing,
    getOrder,
    saveOrder,
    getFilter,
    saveFilter,
    getPage,
    getFavorites,
    saveFavorites
}
