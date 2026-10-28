export const COUNTRIES = ['Россия', 'Беларусь', 'Казахстан', 'Украина']
export const REGIONS = ['Московская область', 'Ленинградская область', 'Свердловская область']
export const DISTRICTS = ['Подольский район', 'Одинцовский район', 'Химкинский район']
export const STATUSES = [
    { value: 'processing', label: 'В обработке' },
    { value: 'warehouse', label: 'На складе' },
    { value: 'sent', label: 'Отправлен' },
    { value: 'delivered', label: 'Доставлен' },
]

// Позже эти значения придут с сервера по id заказа
export const ORDER_DEFAULTS = {
    firstName: 'Евгения', lastName: 'Яшкуль', phone: '+7 900 000 00 00',
    country: 'Россия', region: 'Московская область', district: 'Подольский район',
    city: 'Москва', zip: '123456', street: 'Ленина', house: '1', apartment: '15',
    cell: '689-1188', barcode: '2312342342', status: 'processing',
}
