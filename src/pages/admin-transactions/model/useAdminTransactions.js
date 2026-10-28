import { useState } from 'react'
import { ADMIN_TRANSACTIONS, ADMIN_TRANSACTION_COLUMNS } from './transactions.data'

export function useAdminTransactions() {
    const [query, setQuery] = useState('')
    const rows = ADMIN_TRANSACTIONS.filter((t) => t.orderId.includes(query.trim()))

    return { query, setQuery, columns: ADMIN_TRANSACTION_COLUMNS, rows }
}
