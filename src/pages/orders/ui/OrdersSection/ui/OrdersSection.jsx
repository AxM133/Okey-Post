import filter from '@/shared/assets/filter.svg'
import { Button } from '@/shared/ui/Button'
import { Container } from '@/shared/ui/Container'
import { SearchInput } from '@/shared/ui/SearchInput'
import { Tabs } from '@/shared/ui/Tabs'
import { OrdersTable } from '@/entities/order'
import { useOrdersSection } from '../model/useOrdersSection'

export function OrdersSection() {
    const { title, action, tabs, tab, setTab, query, setQuery, orders } = useOrdersSection()

    return (
        <section className="pt-17.5">
            <Container wide>
                <div className="flex items-center justify-between">
                    <h1 className="text-[28px] font-bold">{title}</h1>
                    <Button>{action}</Button>
                </div>

                <div className="mt-15 flex items-end justify-between">
                    <Tabs tabs={tabs} activeId={tab} onChange={setTab} className="w-90" />

                    <div className="flex items-center gap-8">
                        <SearchInput value={query} onChange={setQuery} placeholder="Поиск по трек номеру" className="w-105" />
                        <button type="button" aria-label="Фильтр" className="flex size-15 cursor-pointer items-center justify-center rounded-full border border-primary">
                            <img src={filter} alt="" />
                        </button>
                    </div>
                </div>

                <div className="mt-10">
                    <OrdersTable orders={orders} />
                </div>
            </Container>
        </section>
    )
}
