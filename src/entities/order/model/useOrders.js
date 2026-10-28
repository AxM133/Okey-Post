import { useState } from 'react'
import { ORDERS } from './orders.data'
import { applyOrdersFilters } from './applyOrdersFilters'

export const ORDER_TABS = [
    { id: 'all', label: 'Все' },
    { id: 'mine', label: 'Мои заказы' },
]

// Позже здесь будет запрос через axios и фильтры в сторе (zustand).
export function useOrders() {
    const [tab, setTab] = useState('all')
    const [query, setQuery] = useState('')
    const [filters, setFilters] = useState(null)

    const q = query.trim()
    const orders = applyOrdersFilters(
        ORDERS.filter((o) => tab === 'all' || o.mine).filter((o) => o.track.includes(q)),
        filters,
    )

    return { orders, tab, setTab, query, setQuery, filters, setFilters }
}
