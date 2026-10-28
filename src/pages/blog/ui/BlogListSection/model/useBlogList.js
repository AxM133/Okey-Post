import { usePagination } from '@/shared/lib'
import { useArticles } from '@/entities/article'

const TOTAL_PAGES = 24

export function useBlogList() {
    const { articles } = useArticles()
    const pagination = usePagination(TOTAL_PAGES)

    return { articles, pagination }
}
