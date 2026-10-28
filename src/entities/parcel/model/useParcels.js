import { PARCELS } from './parcels.data'

// Позже здесь будет запрос через axios.
export function useParcels() {
    return { parcels: PARCELS }
}
