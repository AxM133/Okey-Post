import { cn } from '@/shared/lib'

// rows: [{ label, value }], зебра: нечётные строки с фоном
export function DefinitionTable({ rows, labelWidth = 'w-80' }) {
    return (
        <dl>
            {rows.map(({ label, value }, i) => (
                <div key={label + i} className={cn('flex min-h-17 items-center rounded-lg px-9', i % 2 === 0 && 'bg-soft')}>
                    <dt className={cn('shrink-0 text-base font-bold', labelWidth)}>{label}</dt>
                    <dd className="text-base font-light">{value}</dd>
                </div>
            ))}
        </dl>
    )
}
