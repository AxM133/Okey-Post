// '11.11.2021' → Date
const parseRuDate = (value) => {
    const [d, m, y] = value.split('.').map(Number)
    return new Date(y, m - 1, d)
}

// fields: [{ name, key, placeholder }]: поле формы → ключ в строке таблицы
export function applyFilters(rows, values, fields) {
    if (!values) return rows
    const from = !values.withoutDate && values.dateFrom ? new Date(values.dateFrom) : null
    const to = !values.withoutDate && values.dateTo ? new Date(new Date(values.dateTo).getTime() + 86399999) : null

    return rows.filter((row) => {
        for (const { name, key } of fields) {
            const wanted = values[name]?.trim().toLowerCase()
            if (wanted && !String(row[key]).toLowerCase().includes(wanted)) return false
        }
        if (row.date) {
            const date = parseRuDate(row.date)
            if (from && date < from) return false
            if (to && date > to) return false
        }
        return true
    })
}
