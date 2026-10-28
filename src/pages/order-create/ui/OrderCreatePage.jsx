import { Container } from '@/shared/ui/Container'
import { CreateOrderForm } from '@/features/create-order'

export function OrderCreatePage() {
    return (
        <section className="pt-17.5">
            <Container wide>
                <h1 className="mb-8 text-[28px] font-bold">Оформление заказа</h1>
                <CreateOrderForm />
            </Container>
        </section>
    )
}
