import { useNavigate } from 'react-router-dom'
import { ROUTES } from '@/shared/config'
import { Button } from '@/shared/ui/Button'
import { Container } from '@/shared/ui/Container'
import { TransactionsTable } from '@/entities/transaction'
import { useTransactionsSection } from '../model/useTransactionsSection'

const field = 'h-15 rounded-lg border border-line bg-white px-5 text-sm outline-none focus:border-primary'

export function TransactionsSection() {
    const { title, types, type, setType, range, setRange, transactions } = useTransactionsSection()
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

                <div className="mt-8 flex items-center gap-4">
                    <input
                        type="text"
                        value={range}
                        onChange={(e) => setRange(e.target.value)}
                        placeholder="От и до"
                        className={`${field} w-87`}
                    />
                    <select value={type} onChange={(e) => setType(e.target.value)} className={`${field} w-87`}>
                        {types.map(({ id, label }) => (
                            <option key={id} value={id}>{label}</option>
                        ))}
                    </select>
                    <Button size="lg" className="w-60">Показать</Button>
                </div>

                <div className="mt-10">
                    <TransactionsTable transactions={transactions} />
                </div>
            </Container>
        </section>
    )
}
