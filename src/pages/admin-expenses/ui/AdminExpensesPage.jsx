import { AdminListSection } from '@/widgets/admin-list-section'
import { useAdminExpenses } from '../model/useAdminExpenses'

export function AdminExpensesPage() {
    const { query, setQuery, columns, rows, filter } = useAdminExpenses()

    return (
        <AdminListSection
            title="Расходы фирмы"
            search={{ value: query, onChange: setQuery, placeholder: 'Номер счета' }}
            filter={filter}
            columns={columns}
            rows={rows}
        />
    )
}
