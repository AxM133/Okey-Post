import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { URL_PATTERN, fakeRequest } from '@/shared/lib'

export function useOrderByLinkForm() {
    const [sent, setSent] = useState(false)

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
    } = useForm({ defaultValues: { url: '' }, mode: 'onBlur' })

    const onSubmit = async (values) => {
        await fakeRequest() // позже: axios.post('/orders/by-link', values)
        console.log('order by link:', values)
        setSent(true)
        reset()
    }

    return {
        sent,
        errors,
        isSubmitting,
        urlField: register('url', {
            required: 'Вставьте ссылку на товар',
            pattern: { value: URL_PATTERN, message: 'Ссылка должна начинаться с http:// или https://' },
        }),
        submit: handleSubmit(onSubmit),
        again: () => setSent(false),
    }
}
