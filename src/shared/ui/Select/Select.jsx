import { useId } from 'react'
import { cn } from '@/shared/lib'

export function Select({ label, error, id, className, children, ...props }) {
    const autoId = useId()
    const selectId = id ?? autoId

    return (
        <div className="flex flex-col gap-2">
            {label && (
                <label htmlFor={selectId} className="text-sm font-bold">
                    {label}
                </label>
            )}

            <select
                id={selectId}
                aria-invalid={Boolean(error)}
                className={cn(
                    'h-15 rounded-md border bg-[#FCFDFF] px-4 outline-none transition',
                    error ? 'border-red-500 focus:border-red-500' : 'border-line focus:border-primary',
                    className,
                )}
                {...props}
            >
                {children}
            </select>
            {error && (
                <p className="text-sm text-red-500" role="alert">
                    {error}
                </p>
            )}
        </div>
    )
}
