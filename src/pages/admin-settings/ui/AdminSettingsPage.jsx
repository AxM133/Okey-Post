import { Container } from '@/shared/ui/Container'
import { SettingsForm } from '@/features/admin-settings'

export function AdminSettingsPage() {
    return (
        <section className="pt-15">
            <Container wide>
                <h1 className="mb-8 text-[28px] font-bold">Настройки</h1>
                <SettingsForm />
            </Container>
        </section>
    )
}
