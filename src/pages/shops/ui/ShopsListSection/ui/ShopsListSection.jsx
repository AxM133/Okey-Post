import { Container } from '@/shared/ui/Container'
import { Pagination } from '@/shared/ui/Pagination'
import { ShopCard } from '@/entities/shop'
import { useShopsList } from '../model/useShopsList'

export function ShopsListSection() {
    const { shops, pagination } = useShopsList()

    return (
        <section className="pt-25">
            <Container>
                <div className="grid grid-cols-5 gap-3.5">
                    {shops.map((shop) => (
                        <ShopCard key={shop.id} shop={shop} />
                    ))}
                </div>

                <div className="mt-8">
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
