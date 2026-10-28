import { AdminListSection } from '@/widgets/admin-list-section'
import { useAdminExpenses } from '../model/useAdminExpenses'

export function AdminExpensesPage() {
    const { query, setQuery, columns, rows } = useAdminExpenses()

    return (
        <AdminListSection
            title="Расходы фирмы"
            search={{ value: query, onChange: setQuery, placeholder: 'Номер счета' }}
            filters
            columns={columns}
            rows={rows}
        />
    )
}
