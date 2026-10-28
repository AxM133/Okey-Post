import { useState } from 'react'
import { TRANSACTIONS } from './transactions.data'

// Позже здесь будет запрос через axios.
export function useTransactions() {
    const [type, setType] = useState('all')
    const [range, setRange] = useState('')

    return { transactions: TRANSACTIONS, type, setType, range, setRange }
}
