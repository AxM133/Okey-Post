import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { PASSWORD_MIN, fakeRequest } from '@/shared/lib'
import { useCurrentUser } from '@/entities/user'

export function useChangePasswordForm() {
    const { user } = useCurrentUser()
    const photo = user.photo
    const [saved, setSaved] = useState(false)

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
    } = useForm({ defaultValues: { oldPassword: '', newPassword: '', repeatPassword: '' }, mode: 'onBlur' })

    const onSubmit = async () => {
        await fakeRequest() // позже: axios.post('/users/me/password', values)
        setSaved(true)
        reset()
    }

    return {
        photo,
        saved,
        errors,
        isSubmitting,
        fields: {
            oldPassword: register('oldPassword', { required: 'Введите старый пароль' }),
            newPassword: register('newPassword', {
                required: 'Введите новый пароль',
                minLength: { value: PASSWORD_MIN, message: `Не короче ${PASSWORD_MIN} символов` },
                // validate получает значение поля и все значения формы
                validate: (value, form) => value !== form.oldPassword || 'Новый пароль совпадает со старым',
                // при изменении этого поля заново проверяем «повтор»
                deps: ['repeatPassword'],
            }),
            repeatPassword: register('repeatPassword', {
                required: 'Повторите новый пароль',
                validate: (value, form) => value === form.newPassword || 'Пароли не совпадают',
            }),
        },
        submit: handleSubmit(onSubmit),
    }
}
