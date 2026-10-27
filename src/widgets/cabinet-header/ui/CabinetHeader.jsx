import { NavLink } from 'react-router-dom'
import { ROUTES } from '@/shared/config'

const LINKS = [
    { to: ROUTES.home, label: 'Главная' },
    { to: ROUTES.cabinet.profile, label: 'Профиль' },
    { to: ROUTES.cabinet.orders, label: 'Заказы' },
    { to: ROUTES.cabinet.parcels, label: 'Посылки' },
    { to: ROUTES.cabinet.transactions, label: 'Транзакции' },
    { to: ROUTES.cabinet.addressBook, label: 'Адресная книга' },
    { to: ROUTES.cabinet.notifications, label: 'Уведомления' },
]

export function CabinetHeader() {
    return (
        <header>
            <nav style={{ display: 'flex', gap: 16, padding: 16 }}>
                {LINKS.map(({ to, label }) => (
                    <NavLink key={to} to={to}>{label}</NavLink>
                ))}
            </nav>
        </header>
    )
}
