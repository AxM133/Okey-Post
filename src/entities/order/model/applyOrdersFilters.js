const DAY = 24 * 60 * 60 * 1000

// '11.11.2021' → Date
export const parseRuDate = (value) => {
    const [d, m, y] = value.split('.').map(Number)
    return new Date(y, m - 1, d)
}

// Период из выпадающего списка или свои даты
export function resolveRange({ period, dateFrom, dateTo }) {
    const now = new Date()
    if (dateFrom || dateTo) {
        return {
            from: dateFrom ? new Date(dateFrom) : null,
            to: dateTo ? new Date(new Date(dateTo).getTime() + DAY - 1) : null,
        }
    }
    if (period === 'month') return { from: new Date(now.getFullYear(), now.getMonth(), 1), to: null }
    if (period === 'lastMonth') {
        return {
            from: new Date(now.getFullYear(), now.getMonth() - 1, 1),
            to: new Date(now.getFullYear(), now.getMonth(), 1),
        }
    }
    return { from: null, to: null }
}

export function applyOrdersFilters(orders, filters) {
    if (!filters) return orders
    const { from, to } = filters.withoutDate ? { from: null, to: null } : resolveRange(filters)
    const id = filters.orderId?.trim()

    return orders.filter((order) => {
        const date = parseRuDate(order.date)
        if (from && date < from) return false
        if (to && date > to) return false
        if (id && !order.orderId.includes(id)) return false
        return true
    })
}
