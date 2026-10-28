import { useState } from 'react'
import { applyFilters } from '@/features/admin-filters'
import { ADMIN_ORDERS, ADMIN_ORDER_COLUMNS, ADMIN_ORDERS_FILTER, ADMIN_ORDER_TABS } from './orders.data'

export function useAdminOrders() {
    const [tab, setTab] = useState(ADMIN_ORDER_TABS[0].id)
    const [query, setQuery] = useState('')
    const [filters, setFilters] = useState(null)
    const base = ADMIN_ORDERS.filter((o) => o.type === tab && o.track.includes(query.trim()))
    const rows = applyFilters(base, filters, ADMIN_ORDERS_FILTER.fields)

    return {
        tabs: ADMIN_ORDER_TABS, tab, setTab,
        query, setQuery, columns: ADMIN_ORDER_COLUMNS, rows,
        filter: { config: ADMIN_ORDERS_FILTER, onApply: setFilters },
    }
}
