import { useState } from 'react'
import { useFieldArray, useForm } from 'react-hook-form'
import { PHONE_PATTERN, fakeRequest } from '@/shared/lib'

const EMPTY_ADDRESS = {
    lastName: '', firstName: '', country: '', region: '', district: '',
    city: '', street: '', house: '', apartment: '', zip: '', phone: '',
}

const required = (label) => ({ required: `Заполните поле «${label}»` })

export function useAddressBookForm() {
    const [saved, setSaved] = useState(false)

    const {
        register,
        control,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm({ defaultValues: { addresses: [EMPTY_ADDRESS] }, mode: 'onBlur' })

    const { fields, append, remove } = useFieldArray({ control, name: 'addresses' })

    const onSubmit = async (values) => {
        await fakeRequest() // позже: axios.put('/addresses', values.addresses)
        console.log('addresses:', values.addresses)
        setSaved(true)
        setTimeout(() => setSaved(false), 3000)
    }

    const fieldsOf = (i) => {
        const name = (key) => `addresses.${i}.${key}`
        return {
            lastName: register(name('lastName'), required('Фамилия')),
            firstName: register(name('firstName'), required('Имя')),
            country: register(name('country'), required('Страна')),
            region: register(name('region'), required('Область')),
            district: register(name('district'), required('Район')),
            city: register(name('city'), required('Город')),
            street: register(name('street'), required('Улица')),
            house: register(name('house'), required('Дом')),
            apartment: register(name('apartment'), required('Квартира')),
            zip: register(name('zip'), {
                required: 'Заполните поле «Индекс»',
                pattern: { value: /^\d{6}$/, message: 'Индекс: 6 цифр' },
            }),
            phone: register(name('phone'), {
                required: 'Заполните поле «Телефон»',
                pattern: { value: PHONE_PATTERN, message: 'Проверьте номер телефона' },
            }),
        }
    }

    return {
        addresses: fields,
        saved,
        errors,
        isSubmitting,
        fieldsOf,
        add: () => append(EMPTY_ADDRESS),
        remove,
        submit: handleSubmit(onSubmit),
    }
}
