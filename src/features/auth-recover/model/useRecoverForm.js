import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { emailRules, fakeRequest } from '@/shared/lib'

export function useRecoverForm() {
    const [sentTo, setSentTo] = useState(null)

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm({ defaultValues: { email: '' } })

    const onSubmit = async (values) => {
        await fakeRequest() // позже: axios.post('/auth/recover', values)
        setSentTo(values.email)
    }

    return {
        sentTo,
        errors,
        isSubmitting,
        emailField: register('email', emailRules),
        submit: handleSubmit(onSubmit),
    }
}
