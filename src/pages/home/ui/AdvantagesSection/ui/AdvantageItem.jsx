import { cn } from '@/shared/lib'

export function AdvantageItem({ icon, title, withDivider }) {
    return (
        <div className="flex flex-1 items-center justify-center">
            <div className={cn('flex h-34 w-full items-center justify-center gap-6', withDivider && 'border-l border-line')}>
                <img src={icon} alt="" className="size-15" />
                <p className="text-base font-bold whitespace-pre-line">{title}</p>
            </div>
        </div>
    )
}
