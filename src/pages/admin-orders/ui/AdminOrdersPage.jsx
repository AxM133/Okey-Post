import { AdminListSection } from '@/widgets/admin-list-section'
import { useAdminOrders } from '../model/useAdminOrders'

export function AdminOrdersPage() {
    const { tabs, tab, setTab, query, setQuery, columns, rows, filter } = useAdminOrders()

    return (
        <AdminListSection
            title="Заказы"
            action="Добавить новый заказ"
            tabs={tabs}
            tab={tab}
            onTab={setTab}
            search={{ value: query, onChange: setQuery, placeholder: 'Поиск по трек номеру' }}
            filter={filter}
            columns={columns}
            rows={rows}
        />
    )
}
