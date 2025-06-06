export interface ListingListType {
    id: number,
    data: {
        listingId: number;
    };
    attributes: {
        "data-cy": string;
        "data-listing-id": string;
    };
    href: string;
    img: {
        src: string;
    };
    address: string;
    facts: string[];
    price: number,
    rooms: number,
    area: number,
    date: string
}
