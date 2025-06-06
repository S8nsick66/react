import { Link } from "react-router-dom";
import type { ListingListType } from "../../types/ListingListType";
import {Favorite} from "../Favorite/Favorite";

interface ListingListProps {
    listing: ListingListType;
}

export function ListingList({ listing }: ListingListProps) {
    return (
        <article className="">
            <Link to={`/listing/${listing.id}`}>
                <img src={listing.img.src} alt={listing.address}/>
                <h2>{listing.address}</h2>
            </Link>
            <Favorite listingId={listing.id} />
            <ul className="flex justify-center gap-4">
                {listing.facts.map((fact, i) => (
                    <li key={i}>{fact}</li>
                ))}
            </ul>
        </article>
    );
}
