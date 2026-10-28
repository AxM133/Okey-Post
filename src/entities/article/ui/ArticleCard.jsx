import clock from '@/shared/assets/clock.svg'

export function ArticleCard({ article }) {
    const { title, cover, date, readTime } = article

    return (
        <article className="flex h-107.5 flex-col overflow-hidden rounded-2xl bg-white shadow-[0_10px_40px_rgba(31,36,40,0.08)]">
            <img src={cover} alt="" className="h-65 w-full object-cover" />

            <div className="flex flex-1 flex-col px-7 pt-6 pb-6">
                <h3 className="max-w-80 text-base leading-6 font-bold">{title}</h3>

                <div className="mt-auto flex items-center justify-between text-[10px] font-light text-muted">
                    <span>{date}</span>
                    <span className="flex items-center gap-1.5">
                        <img src={clock} alt="" />
                        {readTime}
                    </span>
                </div>
            </div>
        </article>
    )
}
