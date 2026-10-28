import { useNavigate } from 'react-router-dom'
import { ROUTES } from '@/shared/config'
import { Button } from '@/shared/ui/Button'
import { Container } from '@/shared/ui/Container'
import { TransactionsTable } from '@/entities/transaction'
import { TransactionsFilterForm } from '@/features/filter-transactions'
import { useTransactionsSection } from '../model/useTransactionsSection'

export function TransactionsSection() {
    const { title, setFilters, transactions } = useTransactionsSection()
    const navigate = useNavigate()

    return (
        <section className="pt-17.5">
            <Container wide>
                <div className="flex items-center justify-between">
                    <h1 className="text-[28px] font-bold">{title}</h1>

                    <div className="flex items-center gap-5">
                        <Button variant="outline">Пополнить счет</Button>
                        <Button onClick={() => navigate(ROUTES.cabinet.createParcel)}>Запрос на формирование посылки</Button>
                    </div>
                </div>

                <div className="mt-8">
                    <TransactionsFilterForm onApply={setFilters} />
                </div>

                <div className="mt-10">
                    <TransactionsTable transactions={transactions} />
                </div>
            </Container>
        </section>
    )
}
