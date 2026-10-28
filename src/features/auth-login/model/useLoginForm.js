import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { ROUTES } from '@/shared/config'
import { PHONE_PATTERN, emailRules, fakeRequest } from '@/shared/lib'

// Приводим результат useForm к простому виду для компонента
const toApi = (form, submit) => ({
    register: form.register,
    errors: form.formState.errors,
    isSubmitting: form.formState.isSubmitting,
    submit,
})

export function useLoginForm() {
    const navigate = useNavigate()
    const [step, setStep] = useState('credentials') // 'credentials' → 'code'

    const credentials = useForm({ defaultValues: { phone: '', email: '', password: '' } })
    const code = useForm({ defaultValues: { code: '' } })

    const submitCredentials = credentials.handleSubmit(async (values) => {
        await fakeRequest() // позже: axios.post('/auth/login', values) → СМС уходит пользователю
        console.log('login:', values)
        setStep('code')
    })

    const submitCode = code.handleSubmit(async (values) => {
        await fakeRequest() // позже: axios.post('/auth/verify', values) и сохранение пользователя в AuthContext
        console.log('code:', values)
        navigate(ROUTES.cabinet.root)
    })

    return {
        step,
        credentials: {
            ...toApi(credentials, submitCredentials),
            fields: {
                phone: credentials.register('phone', {
                    pattern: { value: PHONE_PATTERN, message: 'Проверьте номер телефона' },
                }),
                email: credentials.register('email', emailRules),
                password: credentials.register('password', {
                    required: 'Введите пароль',
                    minLength: { value: 6, message: 'Не короче 6 символов' },
                }),
            },
        },
        code: {
            ...toApi(code, submitCode),
            field: code.register('code', {
                required: 'Введите код из СМС',
                pattern: { value: /^\d{4,6}$/, message: 'Код: 4–6 цифр' },
            }),
        },
    }
}
