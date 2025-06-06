export const OrderOptions = [
    {
        key: 'date',
        label: 'Senaste'
    },
    {
        key: 'price',
        label: 'Pris'
    },
    {
        key: 'area',
        label: 'Area'
    },
    {
        key: 'rooms',
        label: 'Antal rum'
    }
] as const;

export type OrderKey = typeof OrderOptions[number]['key'];

// Helper function to check if param is a valid OrderKey
export function isValidOrderKey(key: string): key is OrderKey {
    return OrderOptions.some(option => option.key === key);
}
