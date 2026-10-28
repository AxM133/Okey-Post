import { useForm, useWatch } from 'react-hook-form'

export const PERIODS = [
    { value: 'all', label: 'За всё время' },
    { value: 'month', label: 'Этот месяц' },
]

export function useAdminFiltersForm({ fields, onApply }) {
    const defaults = {
        dateFrom: '',
        dateTo: '',
        withoutDate: false,
        ...Object.fromEntries(fields.map(({ name }) => [name, ''])),
    }

    const {
        register,
        handleSubmit,
        reset,
        control,
        formState: { errors },
    } = useForm({ defaultValues: defaults })

    return {
        periods: PERIODS,
        withoutDate: useWatch({ control, name: 'withoutDate' }),
        errors,
        field: (name) => register(name),
        dateTo: register('dateTo', {
            validate: (value, form) => !value || !form.dateFrom || value >= form.dateFrom || 'Конец раньше начала',
        }),
        submit: handleSubmit(onApply),
        clear: () => {
            reset(defaults)
            onApply(null)
        },
    }
}
