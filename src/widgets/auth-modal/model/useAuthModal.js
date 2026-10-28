import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { ROUTES } from '@/shared/config'

export function useAuthModal() {
    const navigate = useNavigate()
    const close = () => navigate(ROUTES.home)

    // Закрытие по Escape
    useEffect(() => {
        const onKeyDown = (e) => e.key === 'Escape' && navigate(ROUTES.home)
        window.addEventListener('keydown', onKeyDown)
        return () => window.removeEventListener('keydown', onKeyDown)
    }, [navigate])

    return { close }
}
