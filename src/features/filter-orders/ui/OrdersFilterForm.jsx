import { Button } from '@/shared/ui/Button'
import { useOrdersFilterForm } from '../model/useOrdersFilterForm'

const control = 'h-15 rounded-lg border border-line bg-white px-4 text-sm outline-none focus:border-primary disabled:opacity-40'

export function OrdersFilterForm({ onApply }) {
    const f = useOrdersFilterForm({ onApply })

    return (
        <form onSubmit={f.submit} noValidate className="flex flex-wrap items-start gap-4">
            <select disabled={f.withoutDate} className={`${control} w-60`} {...f.fields.period}>
                {f.periods.map(({ value, label }) => (
                    <option key={value} value={value}>{label}</option>
                ))}
            </select>

            <div className="flex items-center gap-2">
                <input type="date" disabled={f.withoutDate} className={`${control} w-45`} {...f.fields.dateFrom} />
                <span>–</span>
                <div>
                    <input type="date" disabled={f.withoutDate} className={`${control} w-45`} {...f.fields.dateTo} />
                    {f.errors.dateTo && <p className="mt-1 text-xs text-red-500" role="alert">{f.errors.dateTo.message}</p>}
                </div>
            </div>

            <label className="flex h-15 items-center gap-2 text-sm">
                <input type="checkbox" className="size-5 accent-primary" {...f.fields.withoutDate} />
                Без учета даты
            </label>

            <input type="text" placeholder="ID заказа" className={`${control} w-40`} {...f.fields.orderId} />

            <Button type="submit" size="lg" className="w-50">Показать</Button>
            <button type="button" onClick={f.clear} className="h-15 cursor-pointer text-sm text-primary">Сбросить</button>
        </form>
    )
}
