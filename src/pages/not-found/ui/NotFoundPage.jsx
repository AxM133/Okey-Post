import { Link } from 'react-router-dom'
import { ROUTES } from '@/shared/config'
import { Container } from '@/shared/ui/Container'

export function NotFoundPage() {
    return (
        <Container className="flex flex-col items-center py-40 text-center">
            <p className="text-[120px] leading-none font-extrabold text-primary">404</p>
            <h1 className="mt-6 text-[40px] font-extrabold">Страница не найдена</h1>
            <p className="mt-4 text-lg font-light">Возможно, она переехала или такого адреса никогда не было.</p>
            <Link to={ROUTES.home} className="mt-10 font-bold text-primary underline">
                Вернуться на главную
            </Link>
        </Container>
    )
}
