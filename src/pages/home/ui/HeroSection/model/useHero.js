import { useNavigate } from 'react-router-dom'
import { ROUTES } from '@/shared/config'
import { HERO } from './hero.data'

export function useHero() {
    const navigate = useNavigate()

    return {
        ...HERO,
        onAction: () => navigate(ROUTES.register),
    }
}
