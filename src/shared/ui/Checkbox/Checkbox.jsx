import { useId } from 'react'

export function Checkbox({ label, error, id, ...props }) {
    const autoId = useId()
    const checkboxId = id ?? autoId

    return (
        <div>
            <div className="flex items-center gap-3">
                <input id={checkboxId} type="checkbox" className="size-5 accent-primary" {...props} />
                <label htmlFor={checkboxId} className="text-sm">
                    {label}
                </label>
            </div>
            {error && (
                <p className="mt-1.5 text-sm text-red-500" role="alert">
                    {error}
                </p>
            )}
        </div>
    )
}
