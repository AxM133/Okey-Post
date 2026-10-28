import { RichText } from '@/shared/ui/RichText'

export function SaleCard({ sale }) {
    return (
        <article className="grid h-90 grid-cols-[328px_1fr] gap-x-14">
            <img src={sale.photo} alt={sale.name} className="size-full rounded-xl object-cover" />

            <div className="flex flex-col pt-4.5 pb-10">
                <h3 className="text-[22px] leading-9 font-semibold">{sale.name}</h3>

                <div className="mt-2 flex max-w-75.25 flex-col gap-4.5">
                    {sale.blocks.map((lines, i) => (
                        <div key={i} className="text-sm leading-9 font-light">
                            {lines.map((parts, j) => (
                                <p key={j}>
                                    <RichText parts={parts} />
                                </p>
                            ))}
                        </div>
                    ))}
                </div>

                <a href="#" className="mt-auto text-sm leading-9 font-semibold text-primary">
                    {sale.action}
                </a>
            </div>
        </article>
    )
}
