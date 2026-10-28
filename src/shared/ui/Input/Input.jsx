import { useId } from 'react'
import { cn } from '@/shared/lib'

export function Input({ label, error, required, id, className, ...props }) {
    const autoId = useId()
    const inputId = id ?? autoId

    return (
        <div className="flex flex-col gap-2">
            {label && (
                <label htmlFor={inputId} className="text-sm font-bold">
                    {label}
                    {required && <span className="text-red-500">*</span>}
                </label>
            )}

            <input
                id={inputId}
                aria-invalid={Boolean(error)}
                className={cn(
                    'h-15 rounded-md border bg-[#FCFDFF] px-4 outline-none transition',
                    error ? 'border-red-500 focus:border-red-500' : 'border-line focus:border-primary',
                    className,
                )}
                {...props}
            />
            {error && (
                <p className="text-sm text-red-500" role="alert">
                    {error}
                </p>
            )}
        </div>
    )
}
