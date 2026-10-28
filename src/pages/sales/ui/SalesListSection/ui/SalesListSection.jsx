import { Container } from '@/shared/ui/Container'
import { Pagination } from '@/shared/ui/Pagination'
import { SectionTitle } from '@/shared/ui/SectionTitle'
import { useSalesList } from '../model/useSalesList'
import { SaleCard } from './SaleCard'

export function SalesListSection() {
    const { title, sales, pagination } = useSalesList()

    return (
        <section className="pt-30">
            <Container>
                <SectionTitle className="max-w-208">{title}</SectionTitle>

                <div className="mt-11 grid grid-cols-2 gap-x-8.25 gap-y-7.5">
                    {sales.map((sale) => (
                        <SaleCard key={sale.id} sale={sale} />
                    ))}
                </div>

                <div className="mt-12.5">
                    <Pagination
                        page={pagination.page}
                        totalPages={pagination.totalPages}
                        onChange={pagination.goTo}
                    />
                </div>
            </Container>
        </section>
    )
}
