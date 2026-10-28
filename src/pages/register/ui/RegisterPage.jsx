import { AuthModal } from '@/widgets/auth-modal'
import { RegisterForm } from '@/features/auth-register'

export function RegisterPage() {
    return (
        <AuthModal title="Начните совершать покупки в английских магазинах">
            <RegisterForm />
        </AuthModal>
    )
}
