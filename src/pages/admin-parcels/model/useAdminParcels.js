import { useState } from 'react'
import { ADMIN_PARCELS, ADMIN_PARCEL_COLUMNS } from './parcels.data'

export function useAdminParcels() {
    const [query, setQuery] = useState('')
    const rows = ADMIN_PARCELS.filter((p) => p.track.includes(query.trim()))

    return { query, setQuery, columns: ADMIN_PARCEL_COLUMNS, rows, barcodes: 1398 }
}
