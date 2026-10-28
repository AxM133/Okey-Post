import { Container } from '@/shared/ui/Container'
import { ChangePasswordForm } from '@/features/change-password'

export function ChangePasswordPage() {
    return (
        <section className="pt-20">
            <Container wide>
                <ChangePasswordForm />
            </Container>
        </section>
    )
}
