const COLUMNS = {
    narrow: 'grid-cols-[1fr_164px]',
    wide: 'grid-cols-[1fr_327px]',
    half: 'grid-cols-[1fr_655px]',
}

export function PriceRow({ title, description, value, width = 'wide' }) {
    const lines = Array.isArray(value) ? value : [value]

    return (
        <div className={`grid ${COLUMNS[width]} items-center rounded-2xl bg-white shadow-[0_10px_40px_rgba(31,36,40,0.08)]`}>
            <div className="px-9.5 py-7">
                <h3 className="text-sm font-bold">{title}</h3>
                {description && <p className="mt-1 text-xs font-light">{description}</p>}
            </div>

            <div className="flex min-h-14 flex-col justify-center border-l border-line px-9 text-sm font-bold">
                {lines.map((line) => (
                    <span key={line}>{line}</span>
                ))}
            </div>
        </div>
    )
}
