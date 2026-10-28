import { usePagination } from '@/shared/lib'
import { SALES, SALES_TITLE } from './sales.data'

const TOTAL_PAGES = 24

export function useSalesList() {
    const pagination = usePagination(TOTAL_PAGES)

    return {
        title: SALES_TITLE,
        sales: SALES,
        pagination,
    }
}
