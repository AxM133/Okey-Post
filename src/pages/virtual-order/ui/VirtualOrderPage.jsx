import { Container } from '@/shared/ui/Container'
import { VirtualOrderForm } from '@/features/create-virtual-order'

export function VirtualOrderPage() {
    return (
        <section className="pt-17.5">
            <Container wide>
                <h1 className="mb-8 text-[28px] font-bold">Создание заказа, который Вы выкупаете самостоятельно</h1>
                <VirtualOrderForm />
            </Container>
        </section>
    )
}
