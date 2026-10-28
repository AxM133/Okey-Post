import { Button } from '@/shared/ui/Button'
import { Input } from '@/shared/ui/Input'
import { Select } from '@/shared/ui/Select'
import { COUNTRIES, DISTRICTS, REGIONS, STATUSES } from '../model/orderEdit.data'
import { useOrderEditForm } from '../model/useOrderEditForm'

function Group({ title, children }) {
    return (
        <fieldset className="mt-8">
            <legend className="mb-4 text-lg font-bold">{title}</legend>
            <div className="grid max-w-250 grid-cols-4 gap-5">{children}</div>
        </fieldset>
    )
}

export function OrderEditForm({ orderId }) {
    const f = useOrderEditForm(orderId)
    const { fields, errors } = f

    return (
        <form onSubmit={f.submit} noValidate>
            <Group title="Личные данные:">
                <Input label="Имя:" error={errors.firstName?.message} {...fields.firstName} />
                <Input label="Фамилия:" error={errors.lastName?.message} {...fields.lastName} />
                <Input label="Телефон:" type="tel" error={errors.phone?.message} {...fields.phone} />
            </Group>

            <Group title="Адрес доставки:">
                <Select label="Страна:" error={errors.country?.message} {...fields.country}>
                    {COUNTRIES.map((v) => <option key={v}>{v}</option>)}
                </Select>
                <Select label="Область:" error={errors.region?.message} {...fields.region}>
                    {REGIONS.map((v) => <option key={v}>{v}</option>)}
                </Select>
                <Select label="Район:" error={errors.district?.message} {...fields.district}>
                    {DISTRICTS.map((v) => <option key={v}>{v}</option>)}
                </Select>
                <Input label="Город:" error={errors.city?.message} {...fields.city} />
                <Input label="Индекс:" inputMode="numeric" error={errors.zip?.message} {...fields.zip} />
                <Input label="Улица:" error={errors.street?.message} {...fields.street} />
                <Input label="Дом:" error={errors.house?.message} {...fields.house} />
                <Input label="Квартира:" {...fields.apartment} />
            </Group>

            <Group title="Данные заказа:">
                <Input label="Ячейка:" error={errors.cell?.message} {...fields.cell} />

                <div className="flex items-end gap-2">
                    <div className="flex-1">
                        <Input label="Баркод:" error={errors.barcode?.message} {...fields.barcode} />
                    </div>
                    <Button type="button" variant="outline" className="h-15 w-15 px-0" aria-label="Сгенерировать баркод" onClick={f.generateBarcode}>
                        +
                    </Button>
                </div>

                <Select label="Статус:" {...fields.status}>
                    {STATUSES.map(({ value, label }) => (
                        <option key={value} value={value}>{label}</option>
                    ))}
                </Select>
            </Group>

            <div className="mt-8 flex gap-4">
                <Button type="submit" size="lg" className="w-50" disabled={f.isSubmitting}>
                    {f.isSubmitting ? 'Сохраняем…' : 'Сохранить'}
                </Button>
                <Button type="button" variant="outline" size="lg" className="w-50" onClick={f.cancel}>Отмена</Button>
            </div>
        </form>
    )
}
