import { useState } from 'react'
import { ADMIN_EXPENSES, ADMIN_EXPENSES_COLUMNS } from './expenses.data'

export function useAdminExpenses() {
    const [query, setQuery] = useState('')
    const rows = ADMIN_EXPENSES.filter((r) => r.account.includes(query.trim()))

    return { query, setQuery, columns: ADMIN_EXPENSES_COLUMNS, rows }
}
