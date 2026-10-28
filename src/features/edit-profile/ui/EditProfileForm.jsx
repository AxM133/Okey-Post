import { Button } from '@/shared/ui/Button'
import { Checkbox } from '@/shared/ui/Checkbox'
import { Input } from '@/shared/ui/Input'
import { useEditProfileForm } from '../model/useEditProfileForm'

export function EditProfileForm() {
    const { preview, fields, errors, isSubmitting, submit } = useEditProfileForm()

    return (
        <form onSubmit={submit} noValidate className="flex gap-12 rounded-2xl bg-white p-7 shadow-[0_10px_40px_rgba(31,36,40,0.08)]">
            <div className="flex w-82.5 shrink-0 flex-col items-center gap-5">
                <img src={preview} alt="" className="size-82.5 rounded-lg object-cover" />

                <label className="inline-flex h-12 w-40 cursor-pointer items-center justify-center rounded-full bg-primary text-xs font-bold text-white">
                    Выбрать фото
                    <input type="file" accept="image/*" className="hidden" {...fields.photo} />
                </label>
                {errors.photo && <p className="text-sm text-red-500" role="alert">{errors.photo.message}</p>}
            </div>

            <div className="flex-1">
                <div className="grid max-w-190 grid-cols-2 gap-x-5 gap-y-5">
                    <Input label="Имя:" error={errors.firstName?.message} {...fields.firstName} />
                    <Input label="Фамилия:" error={errors.lastName?.message} {...fields.lastName} />
                    <Input label="Адрес:" error={errors.address?.message} {...fields.address} />
                    <Input label="Логин:" error={errors.login?.message} {...fields.login} />
                    <Input label="Номер телефона:" type="tel" error={errors.phone?.message} {...fields.phone} />
                    <Input label="E-mail:" type="email" error={errors.email?.message} {...fields.email} />
                </div>

                <div className="mt-6">
                    <Checkbox label="Подписаться на рассылку" {...fields.subscribe} />
                </div>

                <Button type="submit" size="lg" className="mt-8 w-50" disabled={isSubmitting}>
                    {isSubmitting ? 'Сохраняем…' : 'Сохранить'}
                </Button>
            </div>
        </form>
    )
}
