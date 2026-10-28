export function ShopCard({ shop }) {
    return (
        <a
            href="#"
            className="flex h-50 flex-col rounded-2xl bg-white px-1.25 pt-5 shadow-[0_10px_40px_rgba(31,36,40,0.08)] transition hover:-translate-y-0.5"
        >
            <img src={shop.logo} alt="" className="h-27.5 w-full object-contain" />
            <span className="mt-auto px-3.5 pb-6 text-xs font-bold">{shop.name}</span>
        </a>
    )
}
