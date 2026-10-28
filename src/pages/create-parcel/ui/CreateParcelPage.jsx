import { Container } from '@/shared/ui/Container'
import { CreateParcelForm } from '@/features/create-parcel'

export function CreateParcelPage() {
    return (
        <section className="pt-17.5">
            <Container wide>
                <h1 className="mb-8 text-[28px] font-bold">Создание посылки</h1>
                <CreateParcelForm />
            </Container>
        </section>
    )
}
