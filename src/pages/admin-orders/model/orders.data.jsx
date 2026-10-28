import { RowActions } from '@/widgets/admin-list-section'

const ok = <span className="inline-block size-4.5 rounded-full bg-primary" />

export const ADMIN_ORDER_TABS = [
    { id: 'regular', label: 'Обычные' },
    { id: 'virtual', label: 'Виртуальные' },
]

export const ADMIN_ORDER_COLUMNS = [
    { key: 'date', title: 'Дата', sortable: true },
    { key: 'orderId', title: 'ID Заказа', sortable: true },
    { key: 'cell', title: 'Ячейка', sortable: true },
    { key: 'track', title: 'Трек номер', sortable: true },
    { key: 'clientId', title: 'ID клиента', sortable: true },
    { key: 'fullName', title: 'ФИО', sortable: true },
    { key: 'shop', title: 'Магазин', sortable: true },
    { key: 'weight', title: 'Вес', sortable: true },
    { key: 'sum', title: 'Сумма', sortable: true },
    { key: 'delivery', title: 'Доставка', sortable: true },
    { key: 'fee', title: '% за выкуп', sortable: true },
    { key: 'tax', title: 'Налоги' },
    { key: 'received', title: 'Дата получения', sortable: true },
    { key: 'status', title: 'Статус', sortable: true, render: () => ok },
    { key: 'actions', title: 'Действие', render: () => <RowActions actions={['edit', 'delete', 'download']} /> },
]

export const ADMIN_ORDERS = [
    { id: 1, date: '11.11.2021', orderId: '35657', cell: '689-1188', track: '231234234234', clientId: '989896', fullName: 'Levis', shop: 'Levis', weight: '152.33 kg', sum: '£568.00', delivery: '£8.00', fee: '10', tax: '0', received: '11.11.2021', type: 'regular' },
]

export const ADMIN_ORDERS_FILTER = {
    fields: [
        { name: 'orderId', key: 'orderId', placeholder: 'ID заказа' },
        { name: 'clientId', key: 'clientId', placeholder: 'User ID' },
        { name: 'fullName', key: 'fullName', placeholder: 'Фамилия' },
        { name: 'shop', key: 'shop', placeholder: 'Магазин' },
    ],
    withDates: true,
}
