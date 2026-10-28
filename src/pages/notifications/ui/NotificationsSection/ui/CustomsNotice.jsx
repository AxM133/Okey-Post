import { Button } from '@/shared/ui/Button'

export function CustomsNotice({ notice, icon }) {
    return (
        <article className="flex gap-6 rounded-2xl bg-white px-9 py-8 shadow-[0_10px_40px_rgba(31,36,40,0.08)]">
            <img src={icon} alt="" className="size-13 shrink-0" />

            <div>
                <h3 className="text-lg font-bold">{notice.title}</h3>
                <p className="mt-3 text-sm leading-7 font-light">{notice.text}</p>
                <Button size="md" className="mt-5 w-45">{notice.action}</Button>
            </div>
        </article>
    )
}
