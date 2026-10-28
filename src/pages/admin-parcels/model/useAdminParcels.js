import { useState } from 'react'
import { applyFilters } from '@/features/admin-filters'
import { ADMIN_PARCELS, ADMIN_PARCEL_COLUMNS, ADMIN_PARCELS_FILTER } from './parcels.data'

export function useAdminParcels() {
    const [query, setQuery] = useState('')
    const [filters, setFilters] = useState(null)
    const base = ADMIN_PARCELS.filter((p) => p.track.includes(query.trim()))
    const rows = applyFilters(base, filters, ADMIN_PARCELS_FILTER.fields)

    return {
        query, setQuery, columns: ADMIN_PARCEL_COLUMNS, rows,
        filter: { config: ADMIN_PARCELS_FILTER, onApply: setFilters },
        barcodes: 1398,
    }
}
