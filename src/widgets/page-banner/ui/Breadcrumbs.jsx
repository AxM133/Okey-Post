import { Link } from 'react-router-dom'
import { ROUTES } from '@/shared/config'

export function Breadcrumbs({ current }) {
    return (
        <nav className="text-xs font-light opacity-80" aria-label="Хлебные крошки">
            <Link to={ROUTES.home} className="hover:underline">Главная</Link>
            <span className="mx-2">/</span>
            <span>{current}</span>
        </nav>
    )
}
