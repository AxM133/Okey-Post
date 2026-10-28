import { useState } from 'react'
import chevron from '@/shared/assets/chevron.svg'
import { cn } from '@/shared/lib'

export function NotificationCard({ notification }) {
    const [open, setOpen] = useState(false)

    return (
        <article className="rounded-2xl bg-white px-9 py-7 shadow-[0_10px_40px_rgba(31,36,40,0.08)]">
            <div className="flex items-start justify-between gap-6">
                <div>
                    <h3 className="text-lg font-bold">{notification.title}</h3>
                    <p className={cn('mt-3 text-sm leading-7 font-light', !open && 'line-clamp-2')}>{notification.text}</p>
                    <time className="mt-4 block text-xs font-light text-muted">{notification.date}</time>
                </div>

                <button type="button" aria-expanded={open} aria-label="Развернуть" onClick={() => setOpen(!open)} className="mt-8 shrink-0 cursor-pointer">
                    <img src={chevron} alt="" className={cn('transition', open && 'rotate-180')} />
                </button>
            </div>
        </article>
    )
}
