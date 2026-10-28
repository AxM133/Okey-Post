import { usePagination } from '@/shared/lib'
import { useShops } from '@/entities/shop'

const TOTAL_PAGES = 24

export function useShopsList() {
    const { shops } = useShops()
    const pagination = usePagination(TOTAL_PAGES)

    return { shops, pagination }
}
