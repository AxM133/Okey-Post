import { ROUTES } from '@/shared/config'

export const ADMIN_NAV = [
    { to: ROUTES.admin.orders, label: 'Заказы' },
    { to: ROUTES.admin.parcels, label: 'Посылки' },
    { to: ROUTES.admin.transactions, label: 'Транзакции' },
    { to: ROUTES.admin.users, label: 'Пользователи' },
    { to: ROUTES.admin.pagesEditor, label: 'Редактор страниц' },
    { to: ROUTES.admin.expenses, label: 'Расходы фирмы' },
    { to: ROUTES.admin.salaries, label: 'Расходы по ЗП' },
    { to: ROUTES.admin.settings, label: 'Настройки' },
]
