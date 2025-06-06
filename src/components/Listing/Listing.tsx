import { Favorite } from "../Favorite/Favorite";
import type { ListingType } from "../../types/ListingType";

interface ListingProps {
    listing: ListingType;
}

export function Listing({ listing }: ListingProps) {
    return (
        <div>
            <h1>{listing.location.address}</h1>
            <img src={listing.heroImage} />
            <p>{listing.salesText}</p>
            <Favorite listingId={listing.id} />
        </div>
    )
}
