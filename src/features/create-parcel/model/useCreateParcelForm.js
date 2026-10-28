import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { ROUTES } from '@/shared/config'
import { fakeRequest } from '@/shared/lib'
import { useOrders } from '@/entities/order'
import { DELIVERY_TYPES, PARCEL_SERVICES } from './parcel.data'

export function useCreateParcelForm() {
    const navigate = useNavigate()
    const { orders } = useOrders()
    const [sent, setSent] = useState(false)

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm({ defaultValues: { orders: [], recipient: '', delivery: 'post', services: [] } })

    const onSubmit = async (values) => {
        await fakeRequest() // позже: axios.post('/parcels', values)
        console.log('parcel request:', values)
        setSent(true)
    }

    return {
        sent,
        orders,
        deliveryTypes: DELIVERY_TYPES,
        services: PARCEL_SERVICES,
        errors,
        isSubmitting,
        addAddress: () => navigate(ROUTES.cabinet.addressBook),
        toParcels: () => navigate(ROUTES.cabinet.parcels),
        fields: {
            // несколько чекбоксов с одним именем = массив значений
            orders: register('orders', { required: 'Выберите хотя бы один заказ' }),
            recipient: register('recipient'),
            delivery: register('delivery', { required: 'Выберите способ доставки' }),
            services: register('services'),
        },
        submit: handleSubmit(onSubmit),
    }
}
