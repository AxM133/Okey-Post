import { useState } from 'react'
import { applyFilters } from '@/features/admin-filters'
import { ADMIN_USERS, ADMIN_USER_COLUMNS, ADMIN_USERS_FILTER } from './users.data'

export function useAdminUsers() {
    const [query, setQuery] = useState('')
    const [filters, setFilters] = useState(null)
    const q = query.trim().toLowerCase()
    const base = ADMIN_USERS.filter((u) => u.login.toLowerCase().includes(q) || u.email.toLowerCase().includes(q))
    const rows = applyFilters(base, filters, ADMIN_USERS_FILTER.fields)

    return {
        query, setQuery, columns: ADMIN_USER_COLUMNS, rows,
        filter: { config: ADMIN_USERS_FILTER, onApply: setFilters },
    }
}
