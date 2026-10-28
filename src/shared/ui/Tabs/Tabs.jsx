import { cn } from '@/shared/lib'

export function Tabs({ tabs, activeId, onChange, className }) {
    return (
        <div className={cn('flex border-b border-muted/60', className)} role="tablist">
            {tabs.map(({ id, label }) => (
                <button
                    key={id}
                    type="button"
                    role="tab"
                    aria-selected={id === activeId}
                    onClick={() => onChange(id)}
                    className={cn(
                        '-mb-px cursor-pointer border-b-2 px-0 pb-4 text-lg font-bold transition mr-12',
                        id === activeId ? 'border-primary text-primary' : 'border-transparent text-text',
                    )}
                >
                    {label}
                </button>
            ))}
        </div>
    )
}
