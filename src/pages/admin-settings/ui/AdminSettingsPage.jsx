import { Container } from '@/shared/ui/Container'
import { SETTINGS_FIELDS } from '../model/settings.data'

export function AdminSettingsPage() {
    return (
        <section className="pt-15">
            <Container wide>
                <h1 className="text-[28px] font-bold">Настройки</h1>

                {/* TODO (react-hook-form): форма из SETTINGS_FIELDS и кнопка «Сохранить» */}
                <div className="mt-8 rounded-2xl border-2 border-dashed border-line p-8 text-sm text-muted">
                    Форма настроек (react-hook-form): {SETTINGS_FIELDS.map((f) => f.label).join(' ')}
                </div>
            </Container>
        </section>
    )
}
