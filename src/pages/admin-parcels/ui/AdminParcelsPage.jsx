import { AdminListSection } from '@/widgets/admin-list-section'
import { useAdminParcels } from '../model/useAdminParcels'

export function AdminParcelsPage() {
    const { query, setQuery, columns, rows, barcodes, filter } = useAdminParcels()

    return (
        <AdminListSection
            title="Посылки"
            note={<span className="text-xs font-bold">Количество баркодов: <span className="text-primary">{barcodes}</span></span>}
            search={{ value: query, onChange: setQuery, placeholder: 'Поиск по трек номеру' }}
            filter={filter}
            columns={columns}
            rows={rows}
        />
    )
}
