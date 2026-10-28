import { Button } from '@/shared/ui/Button'
import { Input } from '@/shared/ui/Input'
import { useAddressBookForm } from '../model/useAddressBookForm'

const LABELS = [
    ['lastName', 'Фамилия'], ['firstName', 'Имя'], ['country', 'Страна'],
    ['region', 'Область'], ['district', 'Район'], ['city', 'Город'],
    ['street', 'Улица'], ['house', 'Дом'], ['apartment', 'Квартира'],
    ['zip', 'Индекс'], ['phone', 'Телефон'],
]

export function AddressBookForm() {
    const f = useAddressBookForm()

    return (
        <form onSubmit={f.submit} noValidate>
            {f.addresses.map((address, i) => {
                const fields = f.fieldsOf(i)
                const err = f.errors.addresses?.[i] ?? {}

                return (
                    <fieldset key={address.id} className="mb-10">
                        {f.addresses.length > 1 && (
                            <div className="mb-4 flex items-center justify-between">
                                <legend className="text-base font-bold">Адрес # {i + 1}</legend>
                                <button type="button" onClick={() => f.remove(i)} className="cursor-pointer text-sm text-red-500">
                                    Удалить адрес
                                </button>
                            </div>
                        )}

                        <div className="grid max-w-250 grid-cols-3 gap-x-5 gap-y-5">
                            {LABELS.map(([key, label]) => (
                                <Input
                                    key={key}
                                    label={label}
                                    required
                                    error={err[key]?.message}
                                    {...fields[key]}
                                />
                            ))}
                        </div>
                    </fieldset>
                )
            })}

            <div className="flex items-center gap-8">
                <Button type="submit" size="lg" className="w-50" disabled={f.isSubmitting}>
                    {f.isSubmitting ? 'Сохраняем…' : 'Сохранить'}
                </Button>
                {f.saved && <span className="text-sm font-bold text-primary">Адреса сохранены</span>}
            </div>

            <button type="button" onClick={f.add} className="mt-6 cursor-pointer text-sm font-bold text-primary">
                + Добавить еще адрес
            </button>
        </form>
    )
}
