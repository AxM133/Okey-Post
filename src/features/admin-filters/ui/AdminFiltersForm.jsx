import { Button } from '@/shared/ui/Button'
import { useAdminFiltersForm } from '../model/useAdminFiltersForm'

const control = 'h-12.5 rounded-lg border border-line bg-white px-4 text-sm outline-none focus:border-primary disabled:opacity-40'

// config: { fields: [{ name, key, placeholder }], withDates?: boolean }
export function AdminFiltersForm({ config, onApply }) {
    const { fields, withDates = true } = config
    const f = useAdminFiltersForm({ fields, onApply })

    return (
        <form onSubmit={f.submit} noValidate className="flex flex-wrap items-start gap-4">
            {withDates && (
                <>
                    <input type="date" aria-label="С" disabled={f.withoutDate} className={`${control} w-42`} {...f.field('dateFrom')} />
                    <div>
                        <input type="date" aria-label="По" disabled={f.withoutDate} className={`${control} w-42`} {...f.dateTo} />
                        {f.errors.dateTo && <p className="mt-1 text-xs text-red-500" role="alert">{f.errors.dateTo.message}</p>}
                    </div>
                    <label className="flex h-12.5 items-center gap-2 text-sm">
                        <input type="checkbox" className="size-5 accent-primary" {...f.field('withoutDate')} />
                        Без учета даты
                    </label>
                </>
            )}

            {fields.map(({ name, placeholder }) => (
                <input key={name} type="text" placeholder={placeholder} className={`${control} w-40`} {...f.field(name)} />
            ))}

            <Button type="submit" className="h-12.5 w-40">Показать</Button>
            <button type="button" onClick={f.clear} className="h-12.5 cursor-pointer text-sm text-primary">Сбросить</button>
        </form>
    )
}
