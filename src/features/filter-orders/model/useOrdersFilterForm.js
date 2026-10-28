import { useForm, useWatch } from 'react-hook-form'

export const PERIODS = [
    { value: 'all', label: 'За всё время' },
    { value: 'month', label: 'Этот месяц' },
    { value: 'lastMonth', label: 'Прошлый месяц' },
]

const DEFAULTS = { period: 'all', dateFrom: '', dateTo: '', withoutDate: false, orderId: '' }

export function useOrdersFilterForm({ onApply }) {
    const {
        register,
        handleSubmit,
        reset,
        control,
        formState: { errors },
    } = useForm({ defaultValues: DEFAULTS })

    // Когда выбрано «Без учета даты», поля дат отключаем
    const withoutDate = useWatch({ control, name: 'withoutDate' })

    return {
        periods: PERIODS,
        withoutDate,
        errors,
        fields: {
            period: register('period'),
            dateFrom: register('dateFrom'),
            dateTo: register('dateTo', {
                validate: (value, form) => !value || !form.dateFrom || value >= form.dateFrom || 'Конец раньше начала',
            }),
            withoutDate: register('withoutDate'),
            orderId: register('orderId'),
        },
        submit: handleSubmit(onApply),
        clear: () => {
            reset(DEFAULTS)
            onApply(null)
        },
    }
}
