import { AuthModal } from '@/widgets/auth-modal'
import { AdminLoginForm } from '@/features/admin-login'

export function AdminLoginPage() {
    return (
        <AuthModal title="Выполните вход в админ панель сайта">
            <AdminLoginForm />
        </AuthModal>
    )
}
