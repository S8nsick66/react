import { useAppSelector, useAppDispatch } from '../../store/hooks';
import { setOrder } from '../../slices/listingsSlice';
import { data } from '../../services/data';
import { OrderOptions, type OrderKey } from '../../types/OrderOptions';
import { useEffect } from "react";

export function ListingsSort() {
    const dispatch = useAppDispatch();
    const order = useAppSelector(state => state.listings.order);

    useEffect(() => {
        data.saveOrder(order)
    }, [order]);

    return (
        <section className="filter">
            <form>
                <label htmlFor="order" className="mr-2">Sortering:</label>
                <select id="order" name="order" value={order} onChange={e => dispatch(setOrder(e.target.value as OrderKey))}>
                {OrderOptions.map(option => (
                    <option key={option.key} value={option.key}>
                        {option.label}
                    </option>
                ))}
                </select>
            </form>
        </section>
    );
}