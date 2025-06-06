import {useAppDispatch, useAppSelector} from "../../store/hooks";
import { data } from "../../services/data";
import { setFilter } from "../../slices/listingsSlice";

export function ListingsFilter() {

    const dispatch = useAppDispatch();
    const filter = useAppSelector(state => state.listings.filter);

    const handleFilterClick = (value: 'all' | 'favorites') => {
        data.saveFilter(value);
        dispatch(setFilter(value));
    };

    return (
        <div className="flex">
            <span className="mr-2">Visa:</span>
            <ul className="flex gap-2">
                <li className={`cursor-pointer ${filter === 'all' ? 'active' : ''}`}
                    onClick={() => handleFilterClick('all')}>Alla</li>
                <li className={`cursor-pointer ${filter === 'favorites' ? 'active' : ''}`}
                    onClick={() => handleFilterClick('favorites')}>Favoriter</li>
            </ul>
        </div>
    );
}