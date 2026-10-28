import doc from '@/shared/assets/doc.svg'
import { RowActions } from '@/widgets/admin-list-section'

export const ADMIN_TRANSACTION_COLUMNS = [
    { key: 'orderId', title: 'ID Заказа', sortable: true },
    { key: 'date', title: 'Дата', sortable: true },
    { key: 'received', title: 'Дата получения', sortable: true },
    { key: 'sum', title: 'Сумма', sortable: true },
    { key: 'currency', title: 'Валюта', sortable: true },
    { key: 'type', title: 'Тип', sortable: true },
    { key: 'comment', title: 'Комментарий', render: () => <img src={doc} alt="" /> },
    { key: 'status', title: 'Статус', sortable: true, render: () => <span className="inline-block size-4.5 rounded-full bg-primary" /> },
    { key: 'fullName', title: 'ФИО', sortable: true },
    { key: 'actions', title: 'Действие', render: () => <RowActions actions={['edit', 'delete', 'download']} /> },
]

export const ADMIN_TRANSACTIONS = Array.from({ length: 6 }, (_, i) => ({
    id: i + 1,
    orderId: '35657',
    date: '11.11.2021',
    received: '35657',
    sum: '£568.00',
    currency: 'Фунты',
    type: 'Card-PayZone',
    fullName: 'Евгения Яшкуль (dmitro.uxui)',
}))

export const ADMIN_TRANSACTIONS_FILTER = {
    fields: [
        { name: 'orderId', key: 'orderId', placeholder: 'ID заказа' },
        { name: 'fullName', key: 'fullName', placeholder: 'Пользователь' },
    ],
    withDates: true,
}
