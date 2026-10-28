import { useState } from 'react'
import { applyFilters } from '@/features/admin-filters'
import { ADMIN_SALARIES, ADMIN_SALARIES_COLUMNS, ADMIN_SALARIES_FILTER } from './salaries.data'

export function useAdminSalaries() {
    const [query, setQuery] = useState('')
    const [filters, setFilters] = useState(null)
    const base = ADMIN_SALARIES.filter((r) => r.account.includes(query.trim()))
    const rows = applyFilters(base, filters, ADMIN_SALARIES_FILTER.fields)

    return {
        query, setQuery, columns: ADMIN_SALARIES_COLUMNS, rows,
        filter: { config: ADMIN_SALARIES_FILTER, onApply: setFilters },
    }
}
