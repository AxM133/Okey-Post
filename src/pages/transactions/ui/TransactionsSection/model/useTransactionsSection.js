import { TRANSACTION_TYPES, useTransactions } from '@/entities/transaction'
import { useCurrentUser } from '@/entities/user'

export function useTransactionsSection() {
    const { user } = useCurrentUser()
    const transactions = useTransactions()

    return {
        title: `Транзакции пользователя ${user.name}`,
        types: TRANSACTION_TYPES,
        ...transactions,
    }
}
