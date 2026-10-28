import { Link } from 'react-router-dom'
import { ROUTES } from '@/shared/config'
import { Button } from '@/shared/ui/Button'
import { Input } from '@/shared/ui/Input'
import { useRecoverForm } from '../model/useRecoverForm'

export function RecoverForm() {
    const { sentTo, errors, isSubmitting, emailField, submit } = useRecoverForm()

    if (sentTo) {
        return (
            <div>
                <p className="text-base leading-6">
                    Мы отправили письмо с новым паролем на <b>{sentTo}</b>.
                </p>
                <Link to={ROUTES.login} className="mt-5 inline-block text-sm text-primary">
                    Вернуться ко входу
                </Link>
            </div>
        )
    }

    return (
        <form onSubmit={submit} noValidate className="flex flex-col gap-5">
            <p className="-mt-2 text-base leading-6 font-light">
                Введите Email, с которым вы зарегистрированы на сайте, и нажмите <b className="font-bold">«Восстановить»</b>
            </p>

            <Input label="Ваш email:" type="email" error={errors.email?.message} {...emailField} />

            <p className="text-xs font-light">
                Вспомнили пароль? <Link to={ROUTES.login} className="text-primary">Выполните вход</Link>
            </p>

            <Button type="submit" size="lg" className="w-50" disabled={isSubmitting}>
                {isSubmitting ? 'Отправляем…' : 'Восстановить'}
            </Button>
        </form>
    )
}
