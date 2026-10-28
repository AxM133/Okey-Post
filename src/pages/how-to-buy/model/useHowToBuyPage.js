import { useNavigate } from 'react-router-dom'
import { ROUTES } from '@/shared/config'
import { BANNER } from './banner.data'

export function useHowToBuyPage() {
    const navigate = useNavigate()

    return {
        banner: BANNER,
        onAction: () => navigate(ROUTES.register),
    }
}
