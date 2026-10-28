import { REVIEWS } from './reviews.data'

// Позже здесь будет запрос через axios, а компоненты менять не придётся.
export function useReviews(limit = REVIEWS.length) {
    return { reviews: REVIEWS.slice(0, limit) }
}
