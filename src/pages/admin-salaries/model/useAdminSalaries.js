import { useState } from 'react'
import { ADMIN_SALARIES, ADMIN_SALARIES_COLUMNS } from './salaries.data'

export function useAdminSalaries() {
    const [query, setQuery] = useState('')
    const rows = ADMIN_SALARIES.filter((r) => r.account.includes(query.trim()))

    return { query, setQuery, columns: ADMIN_SALARIES_COLUMNS, rows }
}
