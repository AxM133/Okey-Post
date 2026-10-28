import { Container } from '@/shared/ui/Container'
import { PriceList } from '@/shared/ui/PriceList'
import { EXTRA_PACKING, INSURANCE } from '../model/insurance.data'

export function InsuranceSection() {
    return (
        <section className="pt-37.5">
            <Container>
                <PriceList title={INSURANCE.title} rows={INSURANCE.rows} width="half" />

                <div className="mt-37.5">
                    <PriceList title={EXTRA_PACKING.title} rows={EXTRA_PACKING.rows} columns="pairs" width="narrow" />
                </div>
            </Container>
        </section>
    )
}
