// Поля формы настроек. Саму форму напишем на react-hook-form.
export const SETTINGS_FIELDS = [
    { name: 'siteName', label: 'Имя сайта:', hint: 'Это имя будет выводится в логотипе сайта' },
    { name: 'email', label: 'Контактный email:', hint: 'На этот почтовый ящик будут приходить уведомления' },
    { name: 'phone', label: 'Контактный телефон без кода:', hint: 'Это контактный телефон.' },
    { name: 'phoneCode', label: 'Код контактного телефона:', hint: 'Это код будет выводится перед контактным телефоном' },
    { name: 'sberRate', label: 'Курс Сбербанк России:', hint: 'Курсы валюты по России – Сбербанк' },
    { name: 'gbrEur', label: 'GBR/EUR', hint: 'Курс GBR/EUR' },
    { name: 'gbrUsd', label: 'GBR/USD', hint: 'Курс GBR/USD' },
    { name: 'gbrRub', label: 'GBR/RUB', hint: 'Курс GBR/RUB' },
]
