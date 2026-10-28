import { AuthModal } from '@/widgets/auth-modal'
import { LoginForm, SmsCodeForm, useLoginForm } from '@/features/auth-login'

export function LoginPage() {
    const { step, credentials, code } = useLoginForm()

    return step === 'credentials' ? (
        <AuthModal title="Выполните вход в ваш личный кабинет">
            <LoginForm form={credentials} />
        </AuthModal>
    ) : (
        <AuthModal title="Введите код из СМС для подтверждения">
            <SmsCodeForm form={code} />
        </AuthModal>
    )
}
