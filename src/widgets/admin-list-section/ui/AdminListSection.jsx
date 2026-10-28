import { Button } from '@/shared/ui/Button'
import { Container } from '@/shared/ui/Container'
import { DataTable } from '@/shared/ui/DataTable'
import { SearchInput } from '@/shared/ui/SearchInput'
import { Tabs } from '@/shared/ui/Tabs'
import { AdminFiltersForm } from '@/features/admin-filters'

// Шаблон страницы-списка админки: заголовок, вкладки, поиск, фильтры, таблица.
// filter: { config: { fields, withDates }, onApply }
export function AdminListSection({
    title,
    note,
    action,
    tabs,
    tab,
    onTab,
    search,
    filter,
    columns,
    rows,
}) {
    return (
        <section className="pt-15">
            <Container wide>
                <div className="flex items-center justify-between gap-10">
                    <h1 className="text-[28px] font-bold">{title}</h1>

                    <div className="flex items-center gap-8">
                        {note}
                        {search && (
                            <SearchInput
                                value={search.value}
                                onChange={search.onChange}
                                placeholder={search.placeholder}
                                className="w-105"
                            />
                        )}
                        {action && <Button>{action}</Button>}
                    </div>
                </div>

                {tabs && <Tabs tabs={tabs} activeId={tab} onChange={onTab} className="mt-8 w-fit" />}

                {filter && (
                    <div className="mt-8">
                        <AdminFiltersForm config={filter.config} onApply={filter.onApply} />
                    </div>
                )}

                <div className="mt-8">
                    <DataTable columns={columns} rows={rows} />
                </div>
            </Container>
        </section>
    )
}
