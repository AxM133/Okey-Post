import { Container } from '@/shared/ui/Container'
import { PriceList } from '@/shared/ui/PriceList'
import { PriceRow } from '@/shared/ui/PriceRow'
import { OPERATORS, WAREHOUSE_PAIRS, WAREHOUSE_ROWS } from '../model/warehouse.data'

export function WarehouseSection() {
    return (
        <section className="pt-37.5">
            <Container>
                <PriceList title={WAREHOUSE_PAIRS.title} rows={WAREHOUSE_PAIRS.rows} columns="pairs" width="narrow" />

                <div className="mt-5 flex flex-col gap-5">
                    {WAREHOUSE_ROWS.rows.map(({ id, ...row }) => (
                        <PriceRow key={id} {...row} />
                    ))}
                </div>

                <div className="mt-37.5">
                    <PriceList title={OPERATORS.title} rows={OPERATORS.rows} />
                </div>
            </Container>
        </section>
    )
}
