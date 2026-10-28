import { Link } from 'react-router-dom'
import { ROUTES } from '@/shared/config'
import { Button } from '@/shared/ui/Button'
import { Input } from '@/shared/ui/Input'
import { useAdminLoginForm } from '../model/useAdminLoginForm'

export function AdminLoginForm() {
    const { fields, errors, isSubmitting, submit } = useAdminLoginForm()

    return (
        <form onSubmit={submit} noValidate className="flex flex-col gap-5">
            <Input label="Ваш email:" type="email" error={errors.email?.message} {...fields.email} />
            <Input label="Ваш пароль:" type="password" error={errors.password?.message} {...fields.password} />

            {errors.root && <p className="text-sm text-red-500" role="alert">{errors.root.message}</p>}

            <p className="text-xs font-light">
                <Link to={ROUTES.forgotPassword} className="text-primary">Восстановление пароля</Link>
                {' '}или{' '}
                <Link to={ROUTES.register} className="text-primary">быстрая регистрация</Link>
            </p>

            <Button type="submit" size="lg" className="w-50" disabled={isSubmitting}>
                {isSubmitting ? 'Входим…' : 'Войти'}
            </Button>
        </form>
    )
}
