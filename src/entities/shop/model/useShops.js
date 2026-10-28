import { SHOPS } from './shops.data'

// Позже здесь будет запрос через axios.
export function useShops() {
    return { shops: SHOPS }
}
