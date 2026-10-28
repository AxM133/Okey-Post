import { ARTICLES } from './articles.data'

// Позже здесь будет запрос через axios.
export function useArticles() {
    return { articles: ARTICLES }
}
