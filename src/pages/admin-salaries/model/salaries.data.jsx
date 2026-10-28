import doc from '@/shared/assets/doc.svg'
import { RowActions } from '@/widgets/admin-list-section'

export const ADMIN_SALARIES_COLUMNS = [
    { key: 'itemId', title: 'ID', sortable: true },
    { key: 'date', title: 'Дата', sortable: true },
    { key: 'fullName', title: 'ФИО', sortable: true },
    { key: 'account', title: 'Номер счета', sortable: true },
    { key: 'comment', title: 'Комментарий', sortable: true, render: () => <img src={doc} alt="" /> },
    { key: 'sum', title: 'Сумма', sortable: true },
    { key: 'tax', title: 'Налог', sortable: true },
    { key: 'actions', title: 'Действие', render: () => <RowActions actions={['edit', 'delete']} /> },
]

export const ADMIN_SALARIES = Array.from({ length: 6 }, (_, i) => ({
    id: i + 1,
    itemId: '35657',
    date: '11.11.2021',
    fullName: 'Евгения Яшкуль (dmitro.uxui)',
    account: '23123423423423',
    sum: '£568.00',
    tax: '£8.00',
}))

export const ADMIN_SALARIES_FILTER = {
    fields: [
        { name: 'account', key: 'account', placeholder: 'Номер счета' },
        { name: 'fullName', key: 'fullName', placeholder: 'ФИО' },
    ],
    withDates: true,
}
