import { Link, NavLink } from 'react-router-dom'
import logo from '@/shared/assets/logo.svg'
import { ROUTES } from '@/shared/config'
import { cn } from '@/shared/lib'
import { Container } from '@/shared/ui/Container'
import { useCabinetHeader } from '../model/useCabinetHeader'

export function CabinetHeader() {
    const { user, unreadCount, nav } = useCabinetHeader()

    return (
        <header className="h-30">
            <Container wide className="flex h-full items-center">
                <Link to={ROUTES.home}>
                    <img src={logo} alt="OkeyPost" />
                </Link>

                <nav className="ml-40 flex gap-12.5">
                    {nav.map(({ to, label, badge, end }) => (
                        <NavLink
                            key={to}
                            to={to}
                            end={end}
                            className={({ isActive }) =>
                                cn('relative text-[15px] font-medium transition hover:text-primary', isActive && 'text-primary')
                            }
                        >
                            {label}
                            {badge && unreadCount > 0 && (
                                <span className="absolute -top-3 -right-5 flex size-5.5 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-white">
                                    {unreadCount}
                                </span>
                            )}
                        </NavLink>
                    ))}
                </nav>

                <Link to={ROUTES.cabinet.profile} className="ml-auto flex items-center gap-4">
                    <img src={user.avatar} alt="" className="size-14.5 rounded-full" />
                    <span className="border-b border-dashed border-text text-[15px] font-medium">{user.name}</span>
                </Link>
            </Container>
        </header>
    )
}
