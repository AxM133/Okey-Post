import { Link } from "react-router-dom"
import { ROUTES } from '@/shared/config'
import logo from '@/shared/assets/logo.svg'
import whatsapp from '@/shared/assets/whatsapp.svg'
import viber from '@/shared/assets/viber.svg'
import chat from '@/shared/assets/chat.svg'

const COLUMNS = [
    {
        title: 'О компании',
        links: [
            { label: 'Услуги', to: ROUTES.prices },
            { label: 'Цены', to: ROUTES.prices },
            { label: 'Отзывы', to: ROUTES.home },
            { label: 'Контакты', to: ROUTES.home },
            { label: 'Вакансии', to: ROUTES.home },
            { label: 'Соглашение о персональных данных', to: ROUTES.home },
            { label: 'Условия использования', to: ROUTES.home },
        ],
    },
    {
        title: 'Полезное',
        links: [
            { label: 'Как работает наш сервис', to: ROUTES.howToBuy },
            { label: 'Как покупать с оператором', to: ROUTES.howToBuy },
            { label: 'Ответы на частые вопросы', to: ROUTES.faq },
            { label: 'Популярные магазины', to: ROUTES.shops },
            { label: 'Черный список магазинов', to: ROUTES.shops },
            { label: 'Актуальные распродажи', to: ROUTES.sales },
        ],
    },
    {
        title: 'Спецпроекты',
        links: [
            { label: '50% на первую доставку', to: ROUTES.sales },
            { label: 'Скидки для постоянных клиентов', to: ROUTES.sales },
            { label: 'Реферальная программа', to: ROUTES.partner },
            { label: 'Кэшбек Mr. Rebates и Rakuten', to: ROUTES.partner },
            { label: 'Stop Fraud', to: ROUTES.home },
        ],
    },
]

const SOCIALS = [
    { icon: whatsapp, label: 'WhatsApp' },
    { icon: viber, label: 'Viber' },
    { icon: chat, label: 'Чат' },
]

export function Footer() {
    return (
        <footer className="pt-18">
            <div className="mx-auto grid w-full max-w-350 grid-cols-[356px_407px_410px_1fr] px-5">
                <div>
                    <Link to={ROUTES.home}>
                        <img src={logo} alt="OkeyPost" />
                    </Link>
                    <div className="flex gap-1 mt-8">
                        {SOCIALS.map(({ icon, label }) => (
                            <a key={label} href="#">
                                <img src={icon} alt={label} />
                            </a>
                        ))}
                    </div>
                </div>

                {COLUMNS.map(({ title, links }) => (
                    <div key={title}>
                        <h3 className="mb-3 font-bold">{title}</h3>
                        <ul className="flex flex-col gap-3 text-sm text-muted">
                            {links.map(({ label, to }) => (
                                <li key={label}>
                                    <Link to={to} className="transition hover:text-primary">
                                        {label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            <div className="mt-16 text-sm text-center border-t mx-15 border-line py-11 text-muted">
                © 2021 Okeypost . Все права защищены.
            </div>
        </footer>
    )
}
