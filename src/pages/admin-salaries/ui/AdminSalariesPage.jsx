import { AdminListSection } from '@/widgets/admin-list-section'
import { useAdminSalaries } from '../model/useAdminSalaries'

export function AdminSalariesPage() {
    const { query, setQuery, columns, rows, filter } = useAdminSalaries()

    return (
        <AdminListSection
            title="Расходы по ЗП"
            search={{ value: query, onChange: setQuery, placeholder: 'Номер счета' }}
            filter={filter}
            columns={columns}
            rows={rows}
        />
    )
}
