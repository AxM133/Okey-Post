import { cn } from '@/shared/lib'

export function Container({ wide = false, className, children }) {
    return (
        <div className={cn('mx-auto w-full px-5', wide ? 'max-w-430' : 'max-w-350', className)}>
            {children}
        </div>
    )
}
