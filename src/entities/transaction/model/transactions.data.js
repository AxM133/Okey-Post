export const TRANSACTIONS = [
    {
        id: 1,
        date: '2017-08-10',
        type: 'Банковский перевод',
        typeId: 'bank',
        description: 'Оплата за посылку ID і46546544',
        credit: '0£',
        cashback: '0£',
        balance: '0£',
    },
]

export const TRANSACTION_TYPES = [
    { id: 'all', label: 'Все транзакции' },
    { id: 'bank', label: 'Банковский перевод' },
    { id: 'paypal', label: 'PayPal' },
    { id: 'card', label: 'Карта' },
]
