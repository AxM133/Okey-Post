import { cn } from '@/shared/lib'

// Поле с подчёркиванием и иконкой, как в макете
export function Field({ label, icon, error, children }) {
    return (
        <label className="block">
            <span className="text-xs font-bold">{label}</span>

            <div className={cn('mt-3 flex items-center gap-3.5 border-b pb-3', error ? 'border-red-500' : 'border-text')}>
                <img src={icon} alt="" className="size-6.5" />
                {children}
            </div>

            {error && (
                <p className="mt-1.5 text-xs text-red-500" role="alert">
                    {error}
                </p>
            )}
        </label>
    )
}
