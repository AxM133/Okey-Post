import { useParams } from 'react-router-dom'
import { Container } from '@/shared/ui/Container'
import { OrderEditForm } from '@/features/admin-order-edit'

export function AdminOrderEditPage() {
    const { id } = useParams()

    return (
        <section className="pt-15">
            <Container wide>
                <h1 className="text-[28px] font-bold">Редактирование заказа {id}</h1>
                <OrderEditForm orderId={id} />
            </Container>
        </section>
    )
}
