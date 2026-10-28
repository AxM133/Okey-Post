export function BenefitCard({ item }) {
    return (
        <article className="rounded-2xl bg-white px-9.25 py-7.5 shadow-[0_10px_40px_rgba(31,36,40,0.08)]">
            <img src={item.icon} alt="" className="size-13" />
            <h3 className="mt-7 text-base font-bold">{item.title}</h3>
            <p className="mt-3 text-[15px] leading-7.5 font-light">{item.text}</p>
        </article>
    )
}
