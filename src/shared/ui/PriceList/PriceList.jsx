import { PriceRow } from '@/shared/ui/PriceRow'
import { SectionTitle } from '@/shared/ui/SectionTitle'

// rows: [{ id, title, description?, value }], columns — 'pairs' (две колонки) или 'rows'
export function PriceList({ title, rows, columns = 'rows', width }) {
    const grid = columns === 'pairs' ? 'grid grid-cols-2 gap-x-8.25 gap-y-5' : 'flex flex-col gap-5'

    return (
        <div>
            <SectionTitle>{title}</SectionTitle>
            <div className={`mt-7.5 ${grid}`}>
                {rows.map(({ id, ...row }) => (
                    <PriceRow key={id} width={width} {...row} />
                ))}
            </div>
        </div>
    )
}
