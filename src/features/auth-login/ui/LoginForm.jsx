import { Link } from 'react-router-dom'
import { ROUTES } from '@/shared/config'
import { Button } from '@/shared/ui/Button'
import { Input } from '@/shared/ui/Input'
import google from '../assets/google.png'
import facebook from '../assets/facebook.png'
import vk from '../assets/vk.png'

const SOCIALS = [
    { id: 'google', icon: google, label: 'Google' },
    { id: 'facebook', icon: facebook, label: 'Facebook' },
    { id: 'vk', icon: vk, label: 'VK' },
]

export function LoginForm({ form }) {
    const { fields, errors, isSubmitting, submit } = form

    return (
        <form onSubmit={submit} noValidate className="flex flex-col gap-5">
            <Input label="Номер телефона:" type="tel" error={errors.phone?.message} {...fields.phone} />
            <Input label="Ваш email:" type="email" error={errors.email?.message} {...fields.email} />
            <Input label="Ваш пароль:" type="password" error={errors.password?.message} {...fields.password} />

            <p className="text-xs font-light">
                <Link to={ROUTES.forgotPassword} className="text-primary">Восстановление пароля</Link>
                {' '}или{' '}
                <Link to={ROUTES.register} className="text-primary">быстрая регистрация</Link>
            </p>

            <div className="flex items-center justify-between">
                <Button type="submit" size="lg" className="w-50" disabled={isSubmitting}>
                    {isSubmitting ? 'Входим…' : 'Войти'}
                </Button>

                <div className="flex gap-1.5">
                    {SOCIALS.map(({ id, icon, label }) => (
                        <button key={id} type="button" aria-label={label} className="cursor-pointer">
                            <img src={icon} alt="" className="size-12" />
                        </button>
                    ))}
                </div>
            </div>
        </form>
    )
}
