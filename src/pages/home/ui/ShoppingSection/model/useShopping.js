import { useNavigate } from 'react-router-dom'
import { ROUTES } from '@/shared/config'
import { SHOPPING } from './shopping.data'

export function useShopping() {
    const navigate = useNavigate()

    return {
        ...SHOPPING,
        onAction: () => navigate(ROUTES.cabinet.orders),
    }
}
