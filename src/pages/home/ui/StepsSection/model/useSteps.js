import { useNavigate } from 'react-router-dom'
import { ROUTES } from '@/shared/config'
import { STEPS, STEPS_FOOTER, STEPS_TITLE } from './steps.data'

export function useSteps() {
    const navigate = useNavigate()

    return {
        title: STEPS_TITLE,
        steps: STEPS,
        footer: STEPS_FOOTER,
        onAction: () => navigate(ROUTES.cabinet.orders),
    }
}
