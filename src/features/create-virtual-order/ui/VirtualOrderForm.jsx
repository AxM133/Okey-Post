import { Button } from '@/shared/ui/Button'
import { Input } from '@/shared/ui/Input'
import { useVirtualOrderForm } from '../model/useVirtualOrderForm'

export function VirtualOrderForm() {
    const { fields, errors, isSubmitting, submit } = useVirtualOrderForm()

    return (
        <form onSubmit={submit} noValidate>
            <div className="grid max-w-250 grid-cols-3 gap-5">
                <Input label="Трек номер:" error={errors.track?.message} {...fields.track} />
                <Input label="Сумма заказа, £:" placeholder="Только цифры" inputMode="decimal" error={errors.sum?.message} {...fields.sum} />
                <Input label="Магазин:" error={errors.shop?.message} {...fields.shop} />
            </div>

            <Button type="submit" size="lg" className="mt-6 w-50" disabled={isSubmitting}>
                {isSubmitting ? 'Сохраняем…' : 'Сохранить'}
            </Button>
        </form>
    )
}
