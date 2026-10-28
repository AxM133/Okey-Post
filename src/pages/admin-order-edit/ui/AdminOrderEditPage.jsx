import { useParams } from 'react-router-dom'
import { Container } from '@/shared/ui/Container'

export function AdminOrderEditPage() {
    const { id } = useParams()

    return (
        <section className="pt-15">
            <Container wide>
                <h1 className="text-[28px] font-bold">Редактирование заказа {id}</h1>

                {/* TODO (react-hook-form): личные данные, адрес доставки, данные заказа */}
                <div className="mt-8 rounded-2xl border-2 border-dashed border-line p-8 text-sm text-muted">
                    Форма редактирования заказа (react-hook-form)
                </div>
            </Container>
        </section>
    )
}
