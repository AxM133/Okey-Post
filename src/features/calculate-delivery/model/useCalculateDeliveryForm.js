import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { fakeRequest } from '@/shared/lib'
import { calcDelivery } from './calcDelivery'
import { CALCULATOR_DEFAULTS, COUNTRIES, SERVICES } from './calculator.data'

export function useCalculateDeliveryForm() {
    const [estimate, setEstimate] = useState(null)

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm({ defaultValues: CALCULATOR_DEFAULTS, mode: 'onBlur' })

    const onSubmit = async (values) => {
        await fakeRequest(400) // позже: axios.post('/delivery/calculate', values)
        setEstimate(calcDelivery(values))
    }

    return {
        countries: COUNTRIES,
        services: SERVICES,
        estimate,
        errors,
        isSubmitting,
        fields: {
            country: register('country', { required: 'Выберите страну' }),
            city: register('city', {
                required: 'Введите город',
                minLength: { value: 2, message: 'Слишком короткое название' },
            }),
            index: register('index', {
                required: 'Введите индекс',
                pattern: { value: /^\d{6}$/, message: 'Индекс: 6 цифр' },
            }),
            weight: register('weight', {
                valueAsNumber: true,
                required: 'Укажите вес',
                min: { value: 0.1, message: 'Минимум 0.1 кг' },
                max: { value: 30, message: 'Максимум 30 кг' },
            }),
            service: register('service'),
        },
        submit: handleSubmit(onSubmit),
    }
}
