import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { PHONE_PATTERN, emailRules, fakeRequest } from '@/shared/lib'
import { SETTINGS_DEFAULTS, SETTINGS_FIELDS } from './settings.data'

// Правила для каждого поля по его имени
const RULES = {
    siteName: { required: 'Введите имя сайта' },
    email: emailRules,
    phone: { required: 'Введите телефон', pattern: { value: PHONE_PATTERN, message: 'Проверьте номер' } },
    phoneCode: { required: 'Введите код', pattern: { value: /^\+\d{1,3}$/, message: 'Формат: +44' } },
}
const rateRules = {
    valueAsNumber: true,
    required: 'Укажите курс',
    min: { value: 0.0001, message: 'Курс должен быть больше 0' },
}

export function useSettingsForm() {
    const [saved, setSaved] = useState(false)

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting, isDirty },
    } = useForm({ defaultValues: SETTINGS_DEFAULTS, mode: 'onBlur' })

    const onSubmit = async (values) => {
        await fakeRequest() // позже: axios.put('/admin/settings', values)
        console.log('settings:', values)
        reset(values) // новые значения становятся «исходными», isDirty снова false
        setSaved(true)
        setTimeout(() => setSaved(false), 3000)
    }

    return {
        fields: SETTINGS_FIELDS.map((f) => ({ ...f, input: register(f.name, RULES[f.name] ?? rateRules) })),
        errors,
        isDirty,
        isSubmitting,
        saved,
        submit: handleSubmit(onSubmit),
    }
}
