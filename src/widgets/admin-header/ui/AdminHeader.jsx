import { Link, NavLink } from 'react-router-dom'
import logo from '@/shared/assets/logo.svg'
import miniLogo from '@/shared/assets/mini-logo.svg'
import { ROUTES } from '@/shared/config'
import { cn } from '@/shared/lib'
import { Container } from '@/shared/ui/Container'
import { ADMIN_NAV } from '../model/nav.data'

export function AdminHeader() {
    return (
        <header className="h-25 bg-soft">
            <Container wide className="flex h-full items-center">
                <Link to={ROUTES.admin.root}>
                    <img src={logo} alt="OkeyPost" />
                </Link>

                <nav className="ml-24 flex gap-11">
                    {ADMIN_NAV.map(({ to, label }) => (
                        <NavLink
                            key={to}
                            to={to}
                            className={({ isActive }) =>
                                cn('text-sm font-medium transition hover:text-primary', isActive && 'text-primary')
                            }
                        >
                            {label}
                        </NavLink>
                    ))}
                </nav>

                <Link to={ROUTES.admin.login} aria-label="Выйти" className="ml-auto flex size-12 items-center justify-center rounded-full bg-white">
                    <img src={miniLogo} alt="" className="size-6" />
                </Link>
            </Container>
        </header>
    )
}
