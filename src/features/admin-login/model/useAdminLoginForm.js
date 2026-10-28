import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { ROUTES } from '@/shared/config'
import { emailRules, fakeRequest } from '@/shared/lib'

export function useAdminLoginForm() {
    const navigate = useNavigate()

    const {
        register,
        handleSubmit,
        setError,
        formState: { errors, isSubmitting },
    } = useForm({ defaultValues: { email: '', password: '' } })

    const onSubmit = async (values) => {
        await fakeRequest() // позже: axios.post('/admin/login', values) и сохранение в AuthContext
        // Пока «сервер» пускает только одного администратора
        if (values.email !== 'admin@okeypost.com') {
            setError('root', { message: 'Неверный email или пароль' })
            return
        }
        navigate(ROUTES.admin.orders)
    }

    return {
        errors,
        isSubmitting,
        fields: {
            email: register('email', emailRules),
            password: register('password', { required: 'Введите пароль' }),
        },
        submit: handleSubmit(onSubmit),
    }
}
