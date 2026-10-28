import { useState } from 'react'
import { ADMIN_ORDERS, ADMIN_ORDER_COLUMNS, ADMIN_ORDER_TABS } from './orders.data'

export function useAdminOrders() {
    const [tab, setTab] = useState(ADMIN_ORDER_TABS[0].id)
    const [query, setQuery] = useState('')

    const rows = ADMIN_ORDERS.filter((o) => o.type === tab && o.track.includes(query.trim()))

    return { tabs: ADMIN_ORDER_TABS, tab, setTab, query, setQuery, columns: ADMIN_ORDER_COLUMNS, rows }
}
