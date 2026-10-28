import { RowActions } from '@/widgets/admin-list-section'

export const ADMIN_PAGE_COLUMNS = [
    { key: 'name', title: 'Название страницы', sortable: true },
    { key: 'actions', title: 'Действия', render: () => <RowActions actions={['edit', 'delete']} /> },
]

export const ADMIN_PAGES = [
    '01_Index', '02_Как покупать', '03_Распродажи', '04_Цены', '05_Часто задаваемые вопросы',
    '06_Партнерская программа', '07_Блог', '08_Магазины', '09_Вход_Забыли пароль', '10_ЛК_Профиль',
].map((name, i) => ({ id: i + 1, name }))
