import { AdminListSection } from '@/widgets/admin-list-section'
import { useAdminTransactions } from '../model/useAdminTransactions'

export function AdminTransactionsPage() {
    const { query, setQuery, columns, rows, filter } = useAdminTransactions()

    return (
        <AdminListSection
            title="Транзакции"
            search={{ value: query, onChange: setQuery, placeholder: 'ID заказа' }}
            filter={filter}
            columns={columns}
            rows={rows}
        />
    )
}
