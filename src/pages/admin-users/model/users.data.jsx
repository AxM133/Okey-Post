import { RowActions } from '@/widgets/admin-list-section'

export const ADMIN_USER_COLUMNS = [
    { key: 'userId', title: 'ID', sortable: true },
    { key: 'login', title: 'Логин', sortable: true },
    { key: 'email', title: 'Email', sortable: true },
    { key: 'name', title: 'Имя', sortable: true },
    { key: 'status', title: 'Статус', sortable: true, render: () => <span className="inline-block size-4.5 rounded-full bg-primary" /> },
    { key: 'balance', title: 'Баланс', sortable: true },
    { key: 'actions', title: 'Действия', render: () => <RowActions actions={['edit', 'delete']} /> },
]

export const ADMIN_USERS = [
    { id: 1, userId: '35657', login: 'tima.fear', email: 'dmitro.uxui@gmail.com', name: 'Дмитрий', balance: '0' },
]

export const ADMIN_USERS_FILTER = {
    fields: [
        { name: 'login', key: 'login', placeholder: 'Пользователь' },
        { name: 'userId', key: 'userId', placeholder: 'ID пользователя' },
    ],
    withDates: false,
}
