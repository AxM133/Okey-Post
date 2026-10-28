import { useState } from 'react'
import { FAQ_GROUPS } from './faq.data'

export function useFaq() {
    const [query, setQuery] = useState('')
    const [openId, setOpenId] = useState(null)

    const normalized = query.trim().toLowerCase()

    const groups = FAQ_GROUPS
        .map((group) => ({
            ...group,
            items: group.items.filter((item) => item.question.toLowerCase().includes(normalized)),
        }))
        .filter((group) => group.items.length > 0)

    return {
        query,
        setQuery,
        groups,
        openId,
        toggle: (id) => setOpenId((current) => (current === id ? null : id)),
    }
}
