import chevron from '@/shared/assets/chevron.svg'
import { cn } from '@/shared/lib'

export function FaqItem({ item, isOpen, onToggle }) {
    return (
        <div className="rounded-2xl bg-white shadow-[0_10px_40px_rgba(31,36,40,0.08)]">
            <button
                type="button"
                onClick={() => onToggle(item.id)}
                aria-expanded={isOpen}
                className="flex min-h-22.5 w-full cursor-pointer items-center justify-between gap-6 px-9.5 text-left text-sm font-bold"
            >
                {item.question}
                <img src={chevron} alt="" className={cn('shrink-0 transition', isOpen && 'rotate-180')} />
            </button>

            {isOpen && <p className="px-9.5 pb-7 text-sm leading-7 font-light">{item.answer}</p>}
        </div>
    )
}
