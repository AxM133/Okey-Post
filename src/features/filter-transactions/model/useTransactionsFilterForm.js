import { useForm } from 'react-hook-form'
import { TRANSACTION_TYPES } from '@/entities/transaction'

const DEFAULTS = { dateFrom: '', dateTo: '', type: 'all' }

export function useTransactionsFilterForm({ onApply }) {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({ defaultValues: DEFAULTS })

    return {
        types: TRANSACTION_TYPES,
        errors,
        fields: {
            dateFrom: register('dateFrom'),
            dateTo: register('dateTo', {
                validate: (value, form) => !value || !form.dateFrom || value >= form.dateFrom || 'Конец раньше начала',
            }),
            type: register('type'),
        },
        submit: handleSubmit(onApply),
        clear: () => {
            reset(DEFAULTS)
            onApply(DEFAULTS)
        },
    }
}
