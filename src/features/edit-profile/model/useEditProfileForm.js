import { useEffect, useMemo } from 'react'
import { useForm, useWatch } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { ROUTES } from '@/shared/config'
import { PHONE_PATTERN, emailRules, fakeRequest } from '@/shared/lib'
import { useCurrentUser } from '@/entities/user'

export function useEditProfileForm() {
    const { user } = useCurrentUser()
    const navigate = useNavigate()
    const [firstName, ...rest] = user.name.split(' ')

    const {
        register,
        handleSubmit,
        control,
        formState: { errors, isSubmitting },
    } = useForm({
        defaultValues: {
            firstName,
            lastName: rest.join(' '),
            address: user.address,
            login: user.login,
            phone: user.phone,
            email: user.email,
            subscribe: true,
        },
        mode: 'onBlur',
    })

    // Превью выбранного фото считаем при рендере, а в эффекте только освобождаем память
    const file = useWatch({ control, name: 'photo' })?.[0]
    const preview = useMemo(() => (file ? URL.createObjectURL(file) : user.photo), [file, user.photo])
    useEffect(() => {
        if (!file) return
        return () => URL.revokeObjectURL(preview)
    }, [file, preview])

    const onSubmit = async (values) => {
        await fakeRequest() // позже: axios.put('/users/me', formData)
        console.log('profile:', { ...values, photo: values.photo?.[0]?.name })
        navigate(ROUTES.cabinet.profile)
    }

    const nameRules = (label) => ({
        required: `Введите ${label}`,
        minLength: { value: 2, message: 'Слишком короткое значение' },
    })

    return {
        preview,
        errors,
        isSubmitting,
        cancel: () => navigate(ROUTES.cabinet.profile),
        fields: {
            photo: register('photo', {
                validate: (files) => !files?.[0] || files[0].size < 2_000_000 || 'Фото больше 2 МБ',
            }),
            firstName: register('firstName', nameRules('имя')),
            lastName: register('lastName', nameRules('фамилию')),
            address: register('address', { required: 'Введите адрес' }),
            login: register('login', {
                required: 'Введите логин',
                pattern: { value: /^[\w.]{3,20}$/, message: '3–20 символов: буквы, цифры, точка, _' },
            }),
            phone: register('phone', {
                required: 'Введите телефон',
                pattern: { value: PHONE_PATTERN, message: 'Проверьте номер телефона' },
            }),
            email: register('email', emailRules),
            subscribe: register('subscribe'),
        },
        submit: handleSubmit(onSubmit),
    }
}
