import { useState } from 'react'

export function usePagination(totalPages) {
    const [page, setPage] = useState(1)

    return {
        page,
        totalPages,
        goTo: (next) => setPage(Math.min(Math.max(next, 1), totalPages)),
        next: () => setPage((p) => Math.min(p + 1, totalPages)),
        prev: () => setPage((p) => Math.max(p - 1, 1)),
    }
}

// 1 2 … 23 24 → [1, 2, '...', 23, 24]
export function getPageItems(page, total) {
    if (total <= 5) return Array.from({ length: total }, (_, i) => i + 1)

    const items = new Set([1, 2, total - 1, total, page - 1, page, page + 1])
    const sorted = [...items].filter((n) => n >= 1 && n <= total).sort((a, b) => a - b)

    return sorted.flatMap((n, i) => (i > 0 && n - sorted[i - 1] > 1 ? ['...', n] : [n]))
}
