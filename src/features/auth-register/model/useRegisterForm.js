import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { ROUTES } from '@/shared/config'
import { emailRules, fakeRequest } from '@/shared/lib'

const nameRules = (label) => ({
    required: `Введите ${label}`,
    minLength: { value: 2, message: 'Слишком короткое значение' },
})

export function useRegisterForm() {
    const navigate = useNavigate()

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm({ defaultValues: { firstName: '', lastName: '', email: '' } })

    const onSubmit = async (values) => {
        await fakeRequest() // позже: axios.post('/auth/register', values)
        console.log('register:', values)
        navigate(ROUTES.login)
    }

    return {
        errors,
        isSubmitting,
        fields: {
            firstName: register('firstName', nameRules('имя')),
            lastName: register('lastName', nameRules('фамилию')),
            email: register('email', emailRules),
        },
        submit: handleSubmit(onSubmit),
    }
}
