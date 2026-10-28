import cheaper from '@/pages/home/assets/stats/cheaper.png'
import fast from '@/pages/home/assets/stats/fast.png'
import sms from '@/pages/home/assets/stats/sms.png'

export const STATS = {
    title: '120 000 довольных клиентов в России уже сделали свой выбор',
    text: 'За последний год десятки тысяч наших клиентов заказали товары из Англии и оставили 19 633 отзыва',
    cards: [
        {
            id: 'cheaper',
            icon: cheaper,
            title: 'Больше не значит дороже',
            text: 'С ростом веса посылки цена за каждые 0.5 кг уменьшается в прогрессии.',
        },
        {
            id: 'fast',
            icon: fast,
            title: 'Быстрая обработка посылок',
            text: 'Посылка обрабатывается не дольше 48 часов после поступления на склад.',
        },
        {
            id: 'sms',
            icon: sms,
            title: 'SMS-уведомления',
            text: 'Отслеживайте весь процесс с помощью sms-уведомлений.',
        },
    ],
}
