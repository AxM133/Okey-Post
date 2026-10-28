import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { emailRules, fakeRequest } from '@/shared/lib'

export function useSubscribeForm() {
    const [done, setDone] = useState(false)

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
    } = useForm({ defaultValues: { email: '' }, mode: 'onBlur' })

    // Через 5 секунд после успеха снова показываем форму
    useEffect(() => {
        if (!done) return
        const timer = setTimeout(() => setDone(false), 5000)
        return () => clearTimeout(timer)
    }, [done])

    const onSubmit = async (values) => {
        await fakeRequest() // позже: axios.post('/subscriptions', values)
        console.log('subscribe:', values)

        setDone(true)
        reset()
    }

    return {
        done,
        errors,
        isSubmitting,
        emailField: register('email', emailRules),
        submit: handleSubmit(onSubmit),
    }
}
