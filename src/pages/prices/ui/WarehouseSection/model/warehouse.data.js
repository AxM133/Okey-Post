export const WAREHOUSE_PAIRS = {
    title: 'Услуги склада',
    rows: [
        { id: 'consolidation', title: 'Консолидация', value: '£1.00/1 трек' },
        { id: 'declaration-a', title: 'Заполнение декларации', value: '£1.00' },
        { id: 'packing', title: 'Дополнительная упаковка', value: '£5.00' },
        { id: 'fragile', title: 'Упаковка хрупких предметов', value: '£10.00' },
        { id: 'declaration-b', title: 'Заполнение декларации', value: '£1.00' },
        { id: 'split', title: 'Разделение заказа', value: '£2.00' },
    ],
}

export const WAREHOUSE_ROWS = {
    id: 'warehouse-rows',
    rows: [
        { id: 'express', title: 'Сборка исходящей посылки вне очереди или экспресс сборка', description: 'Чтобы сэкономить время', value: '£5.00' },
        { id: 'photo', title: 'Фото содержимого входящей посылки', description: '3 фото за $5 или 10 фото за $8, а ещё можно попросить сфотографировать бирку или подарочный сертификат', value: '£1.00 за 1 фото' },
        { id: 'return', title: 'Возврат вещей в магазин', description: 'В случае, если вещи нельзя отправить в страну назначения, возврат в магазин для услуги "Виртуальный адрес"', value: '£10 + почтовые расходы' },
        { id: 'check', title: 'Проверка техники на работоспособность', description: 'Проверка электроники на включение/выключение (запрос через тикеты).', value: '£10' },
        { id: 'invoice', title: 'Удаление инвойса', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', value: 'Бесплатно' },
        { id: 'extra', title: 'Дополнительная упаковка', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', value: 'По договоренности' },
    ],
}

export const OPERATORS = {
    title: 'Покупки с операторами Okeypost.com',
    rows: [
        {
            id: 'quick',
            title: 'Быстрое оформление покупок в интернет-магазинах',
            description: 'Вы присылаете ссылки, а оформлением заказов занимаются операторы Почтой.ком. Они сделают покупки за вас, проконтролируют доставку на склад и сообщат, когда всё будет готово.',
            value: ['5% от стоимости товаров', 'минимум £7 для каждого магазина', 'Но не менее £7 для каждого лота eBay'],
        },
        {
            id: 'photo',
            title: 'Фото товара по услуге "Покупка с операторами"',
            description: 'Три фото выбранного вами товара, приобретенного по услуге "Полное сопровождение"',
            value: '£2',
        },
    ],
}
