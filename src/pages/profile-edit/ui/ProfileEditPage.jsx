import { Container } from '@/shared/ui/Container'
import { EditProfileForm } from '@/features/edit-profile'

export function ProfileEditPage() {
    return (
        <section className="pt-20">
            <Container wide>
                <EditProfileForm />
            </Container>
        </section>
    )
}
