import { cn } from "@/shared/lib";

const SIZES = {
    md: 'h-12 px-6 text-xs',
    lg: 'h-16.5 px-10 text-base',
}

const VARIANTS = {
    primary: 'bg-primary text-white hover:brightness-95',
    outline: 'border border-primary bg-transparent text-primary hover:bg-primary hover:text-white',
}

export function Button({
    variant = 'primary',
    size = 'md',
    type = 'button',
    className,
    children,
    ...props
}) {
    return (
        <button
            type={type}
            className={cn(
                'inline-flex cursor-pointer items-center justify-center rounded-full font-bold transition',
                'disabled:cursor-not-allowed disabled:opacity-50',
                VARIANTS[variant],
                SIZES[size],
                className,
            )}
            {...props}
        >
            {children}
        </button>
    )
}