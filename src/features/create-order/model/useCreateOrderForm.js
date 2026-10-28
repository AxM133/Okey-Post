import { useState } from 'react'
import { useFieldArray, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { ROUTES } from '@/shared/config'
import { URL_PATTERN, fakeRequest } from '@/shared/lib'

const DRAFT_KEY = 'okeypost:order-draft'
const EMPTY_ITEM = { link: '', name: '', quantity: 1, size: '', color: '', price: '', comment: '' }

function loadDraft() {
    try {
        const saved = JSON.parse(localStorage.getItem(DRAFT_KEY))
        return saved?.items?.length ? saved : null
    } catch {
        return null
    }
}

export function useCreateOrderForm() {
    const navigate = useNavigate()
    const [draftSaved, setDraftSaved] = useState(false)

    const {
        register,
        control,
        handleSubmit,
        getValues,
        formState: { errors, isSubmitting },
    } = useForm({ defaultValues: loadDraft() ?? { items: [EMPTY_ITEM] }, mode: 'onBlur' })

    // Динамический список товаров
    const { fields, append, remove } = useFieldArray({ control, name: 'items' })

    const onSubmit = async (values) => {
        await fakeRequest() // позже: axios.post('/orders', values)
        console.log('order:', values)
        localStorage.removeItem(DRAFT_KEY)
        navigate(ROUTES.cabinet.orders)
    }

    const fieldsOf = (i) => ({
        link: register(`items.${i}.link`, {
            required: 'Вставьте ссылку на товар',
            pattern: { value: URL_PATTERN, message: 'Ссылка должна начинаться с http:// или https://' },
        }),
        name: register(`items.${i}.name`, { required: 'Введите название товара' }),
        quantity: register(`items.${i}.quantity`, {
            valueAsNumber: true,
            required: 'Укажите количество',
            min: { value: 1, message: 'Минимум 1' },
            max: { value: 99, message: 'Максимум 99' },
        }),
        size: register(`items.${i}.size`),
        color: register(`items.${i}.color`),
        price: register(`items.${i}.price`, {
            valueAsNumber: true,
            required: 'Укажите цену',
            min: { value: 0.01, message: 'Цена должна быть больше 0' },
        }),
        comment: register(`items.${i}.comment`),
    })

    return {
        items: fields,
        draftSaved,
        errors,
        isSubmitting,
        fieldsOf,
        add: () => append(EMPTY_ITEM),
        // Копия последнего товара
        duplicate: () => append(getValues('items').at(-1)),
        remove: (i) => remove(i),
        saveDraft: () => {
            localStorage.setItem(DRAFT_KEY, JSON.stringify(getValues()))
            setDraftSaved(true)
            setTimeout(() => setDraftSaved(false), 3000)
        },
        submit: handleSubmit(onSubmit),
    }
}
