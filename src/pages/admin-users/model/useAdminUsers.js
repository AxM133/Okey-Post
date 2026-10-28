import { useState } from 'react'
import { ADMIN_USERS, ADMIN_USER_COLUMNS } from './users.data'

export function useAdminUsers() {
    const [query, setQuery] = useState('')
    const q = query.trim().toLowerCase()
    const rows = ADMIN_USERS.filter((u) => u.login.toLowerCase().includes(q) || u.email.toLowerCase().includes(q))

    return { query, setQuery, columns: ADMIN_USER_COLUMNS, rows }
}
