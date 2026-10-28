export const COUNTRIES = [
    { value: 'RU', label: 'Россия', base: 13 },
    { value: 'BY', label: 'Беларусь', base: 15 },
    { value: 'KZ', label: 'Казахстан', base: 18 },
    { value: 'UA', label: 'Украина', base: 16 },
]

export const SERVICES = [
    { value: 'none', label: 'Выберите услуги', fee: 0 },
    { value: 'packing', label: 'Усиленная упаковка', fee: 0.25 },
    { value: 'insurance', label: 'Страхование', fee: 1.5 },
    { value: 'merge', label: 'Консолидация', fee: 10 },
]

export const CALCULATOR_DEFAULTS = {
    country: 'RU',
    city: 'Москва',
    index: '',
    weight: 0.5,
    service: 'none',
}
