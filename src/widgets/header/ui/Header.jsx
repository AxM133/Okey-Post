import { Link } from 'react-router-dom'
import { ROUTES } from '@/shared/config'

const NAV_LINKS = [
    { to: ROUTES.howToBuy, label: 'Как покупать' },
    { to: ROUTES.sales, label: 'Распродажи' },
    { to: ROUTES.prices, label: 'Цены' },
    { to: ROUTES.faq, label: 'Помощь' },
    { to: ROUTES.partner, label: 'Бонусы' },
    { to: ROUTES.blog, label: 'Блог' },
    { to: ROUTES.shops, label: 'Магазины' },
    { to: ROUTES.login, label: 'Вход' },
    { to: ROUTES.cabinet.root, label: 'Кабинет (dev)' },
    { to: ROUTES.admin.root, label: 'Админка (dev)' },
]

export function Header() {
    return (
        <header>
            <nav style={{ display: 'flex', gap: 16, padding: 16 }}>
                <Link to={ROUTES.home}>Главная</Link>
                {NAV_LINKS.map(({ to, label }) => (
                    <Link key={to} to={to}>{label}</Link>
                ))}
            </nav>
        </header>
    )
}
