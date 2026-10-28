import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { ROUTES } from '@/shared/config'
import { PHONE_PATTERN, fakeRequest } from '@/shared/lib'
import { ORDER_DEFAULTS } from './orderEdit.data'

const required = (label) => ({ required: `Заполните поле «${label}»` })

export function useOrderEditForm(orderId) {
    const navigate = useNavigate()

    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors, isSubmitting },
    } = useForm({ defaultValues: ORDER_DEFAULTS, mode: 'onBlur' })

    const onSubmit = async (values) => {
        await fakeRequest() // позже: axios.put(`/admin/orders/${orderId}`, values)
        console.log('order edit:', orderId, values)
        navigate(ROUTES.admin.orders)
    }

    return {
        errors,
        isSubmitting,
        // setValue меняет значение поля из кода (кнопка «сгенерировать»)
        generateBarcode: () =>
            setValue('barcode', String(Math.floor(1e9 + Math.random() * 9e9)), { shouldValidate: true, shouldDirty: true }),
        fields: {
            firstName: register('firstName', required('Имя')),
            lastName: register('lastName', required('Фамилия')),
            phone: register('phone', { required: 'Заполните телефон', pattern: { value: PHONE_PATTERN, message: 'Проверьте номер' } }),
            country: register('country', required('Страна')),
            region: register('region', required('Область')),
            district: register('district', required('Район')),
            city: register('city', required('Город')),
            zip: register('zip', { required: 'Заполните индекс', pattern: { value: /^\d{6}$/, message: 'Индекс: 6 цифр' } }),
            street: register('street', required('Улица')),
            house: register('house', required('Дом')),
            apartment: register('apartment'),
            cell: register('cell', { required: 'Укажите ячейку', pattern: { value: /^\d{3}-\d{4}$/, message: 'Формат: 689-1188' } }),
            barcode: register('barcode', { required: 'Укажите баркод', pattern: { value: /^\d{6,12}$/, message: 'Только цифры' } }),
            status: register('status'),
        },
        submit: handleSubmit(onSubmit),
        cancel: () => navigate(ROUTES.admin.orders),
    }
}
