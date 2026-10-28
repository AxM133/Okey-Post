import chevron from '@/shared/assets/chevron.svg'

function Cell({ label, children }) {
    return (
        <div className="flex h-20.5 flex-col justify-center border-l border-line pl-14">
            <span className="text-xs font-light">{label}</span>
            <span className="mt-1 text-base font-bold">{children}</span>
        </div>
    )
}

export function DeliveryMethodCard({ method }) {
    const { title, icon, days, priceFrom, total } = method

    return (
        <div className="grid h-26 grid-cols-[1fr_209px_230px_186px_52px] items-center rounded-2xl bg-white shadow-[0_10px_40px_rgba(31,36,40,0.08)]">
            <div className="flex items-center gap-7 pl-7">
                <img src={icon} alt="" className="size-13" />
                <h3 className="text-base font-bold uppercase">{title}</h3>
            </div>

            <Cell label="Сроки:">{days}</Cell>
            <Cell label="Стоимость доставки:">
                от {priceFrom}
                <span className="ml-2 inline-flex size-4 items-center justify-center rounded-full bg-line text-[10px] font-bold text-white">
                    i
                </span>
            </Cell>
            <Cell label="Итого:">{total}</Cell>

            <button type="button" aria-label="Подробнее" className="flex h-20.5 cursor-pointer items-center justify-center border-l border-line">
                <img src={chevron} alt="" />
            </button>
        </div>
    )
}
