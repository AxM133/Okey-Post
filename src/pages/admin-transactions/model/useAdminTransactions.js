import { useState } from 'react'
import { applyFilters } from '@/features/admin-filters'
import { ADMIN_TRANSACTIONS, ADMIN_TRANSACTION_COLUMNS, ADMIN_TRANSACTIONS_FILTER } from './transactions.data'

export function useAdminTransactions() {
    const [query, setQuery] = useState('')
    const [filters, setFilters] = useState(null)
    const base = ADMIN_TRANSACTIONS.filter((t) => t.orderId.includes(query.trim()))
    const rows = applyFilters(base, filters, ADMIN_TRANSACTIONS_FILTER.fields)

    return {
        query, setQuery, columns: ADMIN_TRANSACTION_COLUMNS, rows,
        filter: { config: ADMIN_TRANSACTIONS_FILTER, onApply: setFilters },
    }
}
