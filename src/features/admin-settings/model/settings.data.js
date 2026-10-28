export const SETTINGS_FIELDS = [
    { name: 'siteName', label: 'Имя сайта:', hint: 'Это имя будет выводится в логотипе сайта', type: 'text' },
    { name: 'email', label: 'Контактный email:', hint: 'На этот почтовый ящик будут приходить уведомления', type: 'email' },
    { name: 'phone', label: 'Контактный телефон без кода:', hint: 'Это контактный телефон.', type: 'tel' },
    { name: 'phoneCode', label: 'Код контактного телефона:', hint: 'Это код будет выводится перед контактным телефоном', type: 'text' },
    { name: 'sberRate', label: 'Курс Сбербанк России:', hint: 'Курсы валюты по России – Сбербанк', type: 'number' },
    { name: 'gbrEur', label: 'GBR/EUR', hint: 'Курс GBR/EUR', type: 'number' },
    { name: 'gbrUsd', label: 'GBR/USD', hint: 'Курс GBR/USD', type: 'number' },
    { name: 'gbrRub', label: 'GBR/RUB', hint: 'Курс GBR/RUB', type: 'number' },
]

export const SETTINGS_DEFAULTS = {
    siteName: 'OkeyPost',
    email: 'info@okeypost.com',
    phone: '2345678',
    phoneCode: '+44',
    sberRate: 98.5,
    gbrEur: 1.17,
    gbrUsd: 1.37,
    gbrRub: 99.2,
}
