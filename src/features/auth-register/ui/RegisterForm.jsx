import { Link } from 'react-router-dom'
import { ROUTES } from '@/shared/config'
import { Button } from '@/shared/ui/Button'
import { Input } from '@/shared/ui/Input'
import { useRegisterForm } from '../model/useRegisterForm'

export function RegisterForm() {
    const { fields, errors, isSubmitting, submit } = useRegisterForm()

    return (
        <form onSubmit={submit} noValidate className="flex flex-col gap-5">
            <Input label="Имя:" autoComplete="given-name" error={errors.firstName?.message} {...fields.firstName} />
            <Input label="Фамилия:" autoComplete="family-name" error={errors.lastName?.message} {...fields.lastName} />
            <Input label="Email:" type="email" error={errors.email?.message} {...fields.email} />

            <p className="text-xs leading-4.5 font-light">
                Нажимая на кнопку вы соглашаетесь с <a href="#" className="text-primary">правилами предоставления услуг</a>{' '}
                и <a href="#" className="text-primary">политикой конфиденциальности</a>
            </p>

            <div className="flex items-center justify-between gap-4">
                <Button type="submit" size="lg" className="w-57.5" disabled={isSubmitting}>
                    {isSubmitting ? 'Отправляем…' : 'Получить адрес в UK'}
                </Button>

                <p className="text-xs leading-4.5 font-light">
                    Уже зарегистрированы?
                    <br />
                    <Link to={ROUTES.login} className="text-primary">Выполните вход</Link>
                </p>
            </div>
        </form>
    )
}
