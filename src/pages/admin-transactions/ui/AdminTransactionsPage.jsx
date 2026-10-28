import { AdminListSection } from '@/widgets/admin-list-section'
import { useAdminTransactions } from '../model/useAdminTransactions'

export function AdminTransactionsPage() {
    const { query, setQuery, columns, rows } = useAdminTransactions()

    return (
        <AdminListSection
            title="Транзакции"
            search={{ value: query, onChange: setQuery, placeholder: 'ID заказа' }}
            filters
            columns={columns}
            rows={rows}
        />
    )
}
