import { ROUTES } from '@/shared/config'

export const CABINET_NAV = [
    { to: ROUTES.home, label: 'Главная', end: true },
    { to: ROUTES.cabinet.profile, label: 'Профиль' },
    { to: ROUTES.cabinet.orders, label: 'Заказы' },
    { to: ROUTES.cabinet.parcels, label: 'Посылки' },
    { to: ROUTES.cabinet.transactions, label: 'Транзакции' },
    { to: ROUTES.cabinet.addressBook, label: 'Адресная книга' },
    { to: ROUTES.cabinet.notifications, label: 'Уведомления', badge: true },
]
