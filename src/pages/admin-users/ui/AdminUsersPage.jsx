import { AdminListSection } from '@/widgets/admin-list-section'
import { useAdminUsers } from '../model/useAdminUsers'

export function AdminUsersPage() {
    const { query, setQuery, columns, rows, filter } = useAdminUsers()

    return (
        <AdminListSection
            title="Пользователи"
            search={{ value: query, onChange: setQuery, placeholder: 'Логин или email' }}
            filter={filter}
            columns={columns}
            rows={rows}
        />
    )
}
