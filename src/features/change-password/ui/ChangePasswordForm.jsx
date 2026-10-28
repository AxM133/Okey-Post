import { Button } from '@/shared/ui/Button'
import { Input } from '@/shared/ui/Input'
import { useChangePasswordForm } from '../model/useChangePasswordForm'

export function ChangePasswordForm() {
    const { photo, saved, fields, errors, isSubmitting, submit } = useChangePasswordForm()

    return (
        <form onSubmit={submit} noValidate className="flex gap-12 rounded-2xl bg-white p-7 shadow-[0_10px_40px_rgba(31,36,40,0.08)]">
            <img src={photo} alt="" className="size-82.5 shrink-0 rounded-lg object-cover" />

            <div className="flex max-w-95 flex-1 flex-col gap-5">
                <Input label="Старый пароль:" type="password" autoComplete="current-password" error={errors.oldPassword?.message} {...fields.oldPassword} />
                <Input label="Новый пароль:" type="password" autoComplete="new-password" error={errors.newPassword?.message} {...fields.newPassword} />
                <Input label="Новый пароль еще раз:" type="password" autoComplete="new-password" error={errors.repeatPassword?.message} {...fields.repeatPassword} />

                {saved && <p className="text-sm font-bold text-primary">Пароль изменён</p>}

                <Button type="submit" size="lg" className="w-50" disabled={isSubmitting}>
                    {isSubmitting ? 'Сохраняем…' : 'Сохранить'}
                </Button>
            </div>
        </form>
    )
}
