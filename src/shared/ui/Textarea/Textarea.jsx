import { useId } from 'react'
import { cn } from '@/shared/lib'

export function Textarea({ label, error, id, className, ...props }) {
    const autoId = useId()
    const textareaId = id ?? autoId

    return (
        <div className="flex flex-col gap-2">
            {label && (
                <label htmlFor={textareaId} className="text-sm font-bold">
                    {label}
                </label>
            )}

            <textarea
                id={textareaId}
                aria-invalid={Boolean(error)}
                className={cn(
                    'min-h-25 rounded-md border bg-[#FCFDFF] p-4 outline-none transition',
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
