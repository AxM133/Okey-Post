import { Container } from '@/shared/ui/Container'
import { useCurrentUser } from '@/entities/user'
import { AddressBookForm } from '@/features/address-book'

export function AddressBookPage() {
    const { user } = useCurrentUser()

    return (
        <section className="pt-17.5">
            <Container wide>
                <h1 className="mb-8 text-[28px] font-bold">Адресная пользователя {user.name}</h1>
                <AddressBookForm />
            </Container>
        </section>
    )
}
