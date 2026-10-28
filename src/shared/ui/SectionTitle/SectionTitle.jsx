import { cn } from '@/shared/lib'

export function SectionTitle({ as: Tag = 'h2', className, children }) {
    return (
        <Tag className={cn('text-[40px] leading-[1.3] font-extrabold', className)}>
            {children}
        </Tag>
    )
}
