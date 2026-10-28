const BASE = { date: '11.11.2021', orderId: '35657', track: '231234234234234', shop: 'Levis', weight: '152.33 kg', sum: '£568.00' }

export const ORDER_STATUSES = {
    processing: { label: 'В обработке', color: 'bg-slate-400' },
    payment: { label: 'Ожидает оплаты', color: 'bg-orange-400' },
    transit: { label: 'В пути', color: 'bg-sky-400' },
    packed: { label: 'Упакован', color: 'bg-purple-400' },
    done: { label: 'Выкуплен', color: 'bg-primary' },
}

export const ORDERS = [
    { id: 1, ...BASE, status: 'processing', bought: false, mine: true, action: null },
    { id: 2, ...BASE, status: 'payment', bought: true, mine: true, action: 'processing' },
    { id: 3, ...BASE, status: 'transit', bought: false, mine: false, action: null },
    { id: 4, ...BASE, status: 'packed', bought: false, mine: true, action: null },
    { id: 5, ...BASE, status: 'done', bought: true, mine: false, action: 'pay' },
]
