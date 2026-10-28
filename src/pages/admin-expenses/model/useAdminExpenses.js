import { useState } from 'react'
import { applyFilters } from '@/features/admin-filters'
import { ADMIN_EXPENSES, ADMIN_EXPENSES_COLUMNS, ADMIN_EXPENSES_FILTER } from './expenses.data'

export function useAdminExpenses() {
    const [query, setQuery] = useState('')
    const [filters, setFilters] = useState(null)
    const base = ADMIN_EXPENSES.filter((r) => r.account.includes(query.trim()))
    const rows = applyFilters(base, filters, ADMIN_EXPENSES_FILTER.fields)

    return {
        query, setQuery, columns: ADMIN_EXPENSES_COLUMNS, rows,
        filter: { config: ADMIN_EXPENSES_FILTER, onApply: setFilters },
    }
}
