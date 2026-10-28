import { AuthModal } from '@/widgets/auth-modal'
import { RecoverForm } from '@/features/auth-recover'

export function ForgotPasswordPage() {
    return (
        <AuthModal title="Восстановление пароля">
            <RecoverForm />
        </AuthModal>
    )
}
