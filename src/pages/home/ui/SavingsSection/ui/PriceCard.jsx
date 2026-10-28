import { cn } from '@/shared/lib'

export function PriceCard({ flag, label, value, accent = false }) {
    return (
        <div className="flex h-30 items-center gap-8 rounded-2xl bg-soft px-8.5">
            <img src={flag} alt="" className="h-13.5 w-19" />
            <div>
                <p className="text-base">{label}</p>
                <p className={cn('text-[26px] font-bold', accent && 'text-primary')}>{value}</p>
            </div>
        </div>
    )
}
