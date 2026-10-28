import { Button } from '@/shared/ui/Button'
import { Input } from '@/shared/ui/Input'
import { useSettingsForm } from '../model/useSettingsForm'

export function SettingsForm() {
    const { fields, errors, isDirty, isSubmitting, saved, submit } = useSettingsForm()

    return (
        <form onSubmit={submit} noValidate>
            <div className="flex max-w-250 flex-col gap-5">
                {fields.map(({ name, label, hint, type, input }) => (
                    <div key={name} className="grid grid-cols-[260px_340px_1fr] items-start gap-6">
                        <label htmlFor={name} className="pt-4.5 text-sm font-bold">{label}</label>
                        <Input id={name} type={type} step={type === 'number' ? 'any' : undefined} error={errors[name]?.message} {...input} />
                        <p className="pt-4.5 text-xs font-light">{hint}</p>
                    </div>
                ))}
            </div>

            <div className="mt-8 flex items-center gap-6">
                <Button type="submit" size="lg" className="w-50" disabled={isSubmitting || !isDirty}>
                    {isSubmitting ? 'Сохраняем…' : 'Сохранить'}
                </Button>
                {saved && <span className="text-sm font-bold text-primary">Настройки сохранены</span>}
            </div>
        </form>
    )
}
