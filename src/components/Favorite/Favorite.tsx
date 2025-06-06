import { useEffect } from "react";
import { data } from "../../services/data";
import { addFavorite, removeFavorite, isFavorite } from "../../slices/favoriteSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";

export function Favorite({ listingId }: { listingId: number }) {
    const dispatch = useAppDispatch();
    const favorites = useAppSelector(state => state.favorites.favorites);
    const isFavoriteListing: boolean = isFavorite(favorites, listingId);

    useEffect(() => {
        data.saveFavorites(favorites);
    }, [favorites]);

    return (
        <div>
            {isFavoriteListing ? (
                <button onClick={() => dispatch(removeFavorite(listingId))}>
                    Remove Favorite
                </button>
            ): (
                <button onClick={() => dispatch(addFavorite(listingId))}>
                    Add Favorite
                </button>
            )}
        </div>
    )
}
