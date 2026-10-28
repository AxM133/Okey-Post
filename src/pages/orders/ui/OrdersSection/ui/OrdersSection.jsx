import filterIcon from '@/shared/assets/filter.svg'
import { Button } from '@/shared/ui/Button'
import { Container } from '@/shared/ui/Container'
import { SearchInput } from '@/shared/ui/SearchInput'
import { Tabs } from '@/shared/ui/Tabs'
import { OrdersTable } from '@/entities/order'
import { OrdersFilterForm } from '@/features/filter-orders'
import { useOrdersSection } from '../model/useOrdersSection'

export function OrdersSection() {
    const s = useOrdersSection()

    return (
        <section className="pt-17.5">
            <Container wide>
                <div className="flex items-center justify-between">
                    <h1 className="text-[28px] font-bold">{s.title}</h1>

                    <div className="flex items-center gap-5">
                        <Button variant="outline" onClick={s.addVirtualOrder}>Добавить новый виртуальный заказ</Button>
                        <Button onClick={s.addOrder}>Добавить новый заказ</Button>
                    </div>
                </div>

                <div className="mt-15 flex items-end justify-between">
                    <Tabs tabs={s.tabs} activeId={s.tab} onChange={s.setTab} className="w-90" />

                    <div className="flex items-center gap-8">
                        <SearchInput value={s.query} onChange={s.setQuery} placeholder="Поиск по трек номеру" className="w-105" />
                        <button
                            type="button"
                            aria-label="Фильтр"
                            aria-expanded={s.filterOpen}
                            onClick={s.toggleFilter}
                            className="flex size-15 cursor-pointer items-center justify-center rounded-full border border-primary"
                        >
                            <img src={filterIcon} alt="" />
                        </button>
                    </div>
                </div>

                {s.filterOpen && (
                    <div className="mt-8">
                        <OrdersFilterForm onApply={s.setFilters} />
                    </div>
                )}

                <div className="mt-10">
                    <OrdersTable orders={s.orders} />
                </div>
            </Container>
        </section>
    )
}
