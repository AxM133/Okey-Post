import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { ROUTES } from '@/shared/config'
import { fakeRequest, requiredText } from '@/shared/lib'

export function useVirtualOrderForm() {
    const navigate = useNavigate()

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm({ defaultValues: { track: '', sum: '', shop: '' }, mode: 'onBlur' })

    const onSubmit = async (values) => {
        await fakeRequest() // позже: axios.post('/orders/virtual', values)
        console.log('virtual order:', values)
        navigate(ROUTES.cabinet.orders)
    }

    return {
        errors,
        isSubmitting,
        fields: {
            track: register('track', {
                required: 'Введите трек номер',
                pattern: { value: /^[A-Za-z0-9]{8,30}$/, message: '8–30 символов: латиница и цифры' },
            }),
            sum: register('sum', {
                required: 'Введите сумму',
                pattern: { value: /^\d+(\.\d{1,2})?$/, message: 'Только цифры' },
                validate: (v) => Number(v) > 0 || 'Сумма должна быть больше 0',
            }),
            shop: register('shop', requiredText('Магазин')),
        },
        submit: handleSubmit(onSubmit),
    }
}
