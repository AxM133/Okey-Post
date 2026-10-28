import { Button } from '@/shared/ui/Button'
import { useTransactionsFilterForm } from '../model/useTransactionsFilterForm'

const control = 'h-15 rounded-lg border border-line bg-white px-5 text-sm outline-none focus:border-primary'

export function TransactionsFilterForm({ onApply }) {
    const f = useTransactionsFilterForm({ onApply })

    return (
        <form onSubmit={f.submit} noValidate className="flex flex-wrap items-start gap-4">
            <input type="date" aria-label="От" className={`${control} w-55`} {...f.fields.dateFrom} />
            <div>
                <input type="date" aria-label="До" className={`${control} w-55`} {...f.fields.dateTo} />
                {f.errors.dateTo && <p className="mt-1 text-xs text-red-500" role="alert">{f.errors.dateTo.message}</p>}
            </div>

            <select className={`${control} w-75`} {...f.fields.type}>
                {f.types.map(({ id, label }) => (
                    <option key={id} value={id}>{label}</option>
                ))}
            </select>

            <Button type="submit" size="lg" className="w-60">Показать</Button>
            <button type="button" onClick={f.clear} className="h-15 cursor-pointer text-sm text-primary">Сбросить</button>
        </form>
    )
}
