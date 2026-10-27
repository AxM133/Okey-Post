import { NavLink, Outlet } from 'react-router-dom'
import { ROUTES } from '@/shared/config'

const LINKS = [
    { to: ROUTES.admin.orders, label: 'Заказы' },
    { to: ROUTES.admin.parcels, label: 'Посылки' },
    { to: ROUTES.admin.users, label: 'Пользователи' },
    { to: ROUTES.admin.transactions, label: 'Транзакции' },
    { to: ROUTES.admin.expenses, label: 'Расходы фирмы' },
    { to: ROUTES.admin.salaries, label: 'Расходы по ЗП' },
    { to: ROUTES.admin.pagesEditor, label: 'Редактор страниц' },
    { to: ROUTES.admin.settings, label: 'Настройки' },
]

export function AdminLayout() {
    return (
        <div style={{ display: 'flex' }}>
            <aside style={{ display: 'flex', flexDirection: 'column', gap: 8, padding: 16 }}>
                {LINKS.map(({ to, label }) => (
                    <NavLink key={to} to={to}>{label}</NavLink>
                ))}
            </aside>
            <main>
                <Outlet />
            </main>
        </div>
    )
}
