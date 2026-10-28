import { Button } from '@/shared/ui/Button'
import { Checkbox } from '@/shared/ui/Checkbox'
import { Select } from '@/shared/ui/Select'
import { useCreateParcelForm } from '../model/useCreateParcelForm'

export function CreateParcelForm() {
    const f = useCreateParcelForm()

    if (f.sent) {
        return (
            <div>
                <p className="text-lg font-bold">Запрос на формирование посылки отправлен</p>
                <Button className="mt-6" onClick={f.toParcels}>К списку посылок</Button>
            </div>
        )
    }

    return (
        <form onSubmit={f.submit} noValidate className="max-w-250">
            <h2 className="text-lg font-bold">Заказы</h2>
            <div className="mt-4 flex flex-col gap-3 border-b border-line pb-8">
                {f.orders.length === 0 && <p className="text-sm font-light">Нет ни одной записи по текущему состоянию</p>}
                {f.orders.map((order) => (
                    <Checkbox
                        key={order.id}
                        value={order.orderId + '-' + order.id}
                        label={`№ ${order.orderId}, ${order.shop}, ${order.sum}`}
                        {...f.fields.orders}
                    />
                ))}
                {f.errors.orders && <p className="text-sm text-red-500" role="alert">{f.errors.orders.message}</p>}
            </div>

            <div className="flex items-end gap-5 border-b border-line py-8">
                <Select label="Выберите получателя:" className="w-130" {...f.fields.recipient}>
                    <option value="">Не выбрано (Заполню позже)</option>
                </Select>
                <Button type="button" onClick={f.addAddress}>Добавить новый адрес</Button>
            </div>

            <div className="flex gap-5 border-b border-line py-8">
                <Select label="Выберите тип:" className="w-130" error={f.errors.delivery?.message} {...f.fields.delivery}>
                    {f.deliveryTypes.map(({ value, label }) => (
                        <option key={value} value={value}>{label}</option>
                    ))}
                </Select>
            </div>

            <div className="flex flex-wrap gap-x-8 gap-y-4 py-8">
                {f.services.map(({ value, label }) => (
                    <Checkbox key={value} value={value} label={label} {...f.fields.services} />
                ))}
            </div>

            <Button type="submit" size="lg" disabled={f.isSubmitting}>
                {f.isSubmitting ? 'Отправляем…' : 'Отправить запрос'}
            </Button>
        </form>
    )
}
