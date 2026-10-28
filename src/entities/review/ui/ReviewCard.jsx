export function ReviewCard({ review }) {
    const { name, rating, text, date, city, photo } = review

    return (
        <article className="flex gap-9.5 rounded-2xl bg-white p-2.5 shadow-[0_10px_40px_rgba(31,36,40,0.08)]">
            <img src={photo} alt="" className="size-60 shrink-0 rounded-xl object-cover" />

            <div className="flex flex-1 flex-col py-3">
                <h3 className="text-lg font-semibold uppercase">{name}</h3>
                <div className="mt-1 text-base tracking-wider text-amber-500" aria-label={`Оценка ${rating} из 5`}>
                    {'★'.repeat(rating)}
                </div>
                <p className="mt-5 pr-8 text-base leading-6.5 font-light">{text}</p>

                <dl className="mt-auto grid grid-cols-[58px_1fr] gap-y-1 text-sm">
                    <dt className="font-bold">Дата:</dt>
                    <dd className="font-light">{date}</dd>
                    <dt className="font-bold">Город:</dt>
                    <dd className="font-light">{city}</dd>
                </dl>
            </div>
        </article>
    )
}
