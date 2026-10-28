import { useState } from 'react'
import { CATEGORIES, PRODUCTS } from './savings.data'

export function useSavings() {
    const [categoryId, setCategoryId] = useState(CATEGORIES[0].id)
    const [index, setIndex] = useState(0)

    const list = PRODUCTS.filter((p) => p.category === categoryId)
    const prevIndex = (index - 1 + list.length) % list.length
    const nextIndex = (index + 1) % list.length

    return {
        categories: CATEGORIES,
        categoryId,
        isEmpty: list.length === 0,
        product: list[index],
        prev: list[prevIndex],
        next: list[nextIndex],
        selectCategory: (id) => {
            setCategoryId(id)
            setIndex(0)
        },
        showPrev: () => setIndex(prevIndex),
        showNext: () => setIndex(nextIndex),
    }
}
