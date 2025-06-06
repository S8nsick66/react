export interface ListingType {
    id: number;
    address: string;
    price: number;
    [key: string]: any; // allows access to any additional field
}
