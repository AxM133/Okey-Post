export function StatCard({ card }) {
    return (
        <div className="h-62.5 rounded-2xl bg-white px-9.5 pt-8.5 shadow-[0_10px_40px_rgba(31,36,40,0.08)]">
            <img src={card.icon} alt="" className="size-13" />
            <h3 className="mt-7.5 text-lg font-bold">{card.title}</h3>
            <p className="mt-2.5 max-w-90 text-[15px] leading-6.5 font-light">{card.text}</p>
        </div>
    )
}
