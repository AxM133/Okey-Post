import { useState } from 'react'
import { TRANSACTIONS } from './transactions.data'

// Позже здесь будет запрос через axios.
export function useTransactions() {
    const [filters, setFilters] = useState({ type: 'all', dateFrom: '', dateTo: '' })

    const transactions = TRANSACTIONS.filter((t) => {
        if (filters.type !== 'all' && t.typeId !== filters.type) return false
        if (filters.dateFrom && t.date < filters.dateFrom) return false
        if (filters.dateTo && t.date > filters.dateTo) return false
        return true
    })

    return { transactions, filters, setFilters }
}
