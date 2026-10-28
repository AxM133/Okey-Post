import doc from '@/shared/assets/doc.svg'
import { Button } from '@/shared/ui/Button'
import { DataTable } from '@/shared/ui/DataTable'
import { ORDER_STATUSES } from '../model/orders.data'

const COLUMNS = [
    { key: 'date', title: 'Дата', sortable: true },
    { key: 'orderId', title: 'ID Заказа', sortable: true },
    { key: 'track', title: 'Трек номер', sortable: true },
    { key: 'shop', title: 'Магазин', sortable: true },
    { key: 'weight', title: 'Вес', sortable: true },
    { key: 'sum', title: 'Сумма', sortable: true },
    {
        key: 'status',
        title: 'Статус',
        sortable: true,
        render: (row) => {
            const { label, color } = ORDER_STATUSES[row.status]
            return <span title={label} className={`inline-block size-4.5 rounded-full ${color}`} />
        },
    },
    {
        key: 'bought',
        title: 'Выкуплен',
        sortable: true,
        render: (row) => (row.bought ? '✓' : '—'),
    },
    { key: 'comments', title: 'Комментарии', render: () => <img src={doc} alt="Комментарии" /> },
    {
        key: 'action',
        title: '',
        render: (row) =>
            row.action === 'pay' ? (
                <Button variant="outline" className="w-30">Оплатить</Button>
            ) : row.action === 'processing' ? (
                <Button variant="outline" disabled className="w-34 border-line text-line">В обработке</Button>
            ) : null,
    },
]

export function OrdersTable({ orders }) {
    return <DataTable columns={COLUMNS} rows={orders} />
}
