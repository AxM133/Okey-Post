import { Link, NavLink } from 'react-router-dom'
import { ROUTES } from '@/shared/config'
import { cn } from '@/shared/lib'
import { Button } from '@/shared/ui/Button'
import logo from '@/shared/assets/logo.svg'
import userIcon from '@/shared/assets/User.svg'

const NAV_LINKS = [
    { to: ROUTES.howToBuy, label: 'Как покупать' },
    { to: ROUTES.sales, label: 'Распродажи' },
    { to: ROUTES.prices, label: 'Цены' },
    { to: ROUTES.faq, label: 'Помощь' },
    { to: ROUTES.partner, label: 'Бонусы' },
    { to: ROUTES.blog, label: 'Блог' },
    { to: ROUTES.shops, label: 'Магазины' },
]

export function Header() {
    return (
        <header className='h-30'>
            <div className='flex items-center justify-between w-full h-full px-5 mx-auto max-w-350'>
                <Link to={ROUTES.home}>
                    <img src={logo} alt='OkeyPost' />
                </Link>

                <nav className='flex gap-10'>
                    {NAV_LINKS.map(({ to, label }) => (
                        <NavLink
                            key={to}
                            to={to}
                            className={({ isActive }) =>
                                cn(
                                    'text-[15px] font-medium transition hover:text-primary',
                                    isActive && 'text-primary',
                                )
                            }
                        >
                            {label}
                        </NavLink>
                    ))}
                </nav>

                <div className='flex items-center gap-10'>
                    <Link
                        to={ROUTES.login}
                        className='flex items-center gap-3 text-[15px] font-medium'
                    >
                        <img src={userIcon} alt='' />
                        Вход
                    </Link>
                    <Button className="w-42.5">Связаться с нами</Button>
                </div>
            </div>
        </header>
    )
}
