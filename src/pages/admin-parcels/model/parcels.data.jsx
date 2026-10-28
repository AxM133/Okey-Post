import { RowActions } from '@/widgets/admin-list-section'

export const ADMIN_PARCEL_COLUMNS = [
    { key: 'parcelId', title: 'ID', sortable: true },
    { key: 'date', title: 'Дата', sortable: true },
    { key: 'type', title: 'Тип', sortable: true },
    { key: 'track', title: 'Трек номер', sortable: true },
    { key: 'orders', title: 'Заказы', sortable: true },
    { key: 'insurance', title: 'Страхование', sortable: true },
    { key: 'cost', title: 'Стоимость', sortable: true },
    { key: 'sum', title: 'Сумма', sortable: true },
    { key: 'total', title: 'Итого', sortable: true },
    { key: 'delivery', title: 'Доставка', sortable: true },
    { key: 'fullName', title: 'ФИО', sortable: true },
    { key: 'status', title: 'Статус', sortable: true, render: () => <span className="inline-block size-4.5 rounded-full bg-primary" /> },
    { key: 'comment', title: 'Комментарии' },
    { key: 'actions', title: 'Действия', render: () => <RowActions actions={['edit', 'delete', 'download']} /> },
]

export const ADMIN_PARCELS = [
    { id: 1, parcelId: '35657', date: '11.11.2021', type: 'Mid Express', track: '231234234234', orders: '12', insurance: '0', cost: '£568.00', sum: '£568.00', total: '£568.00', delivery: '£8.00', fullName: 'Евгения Яшкуль (dmitro.uxui)', comment: '—' },
]
