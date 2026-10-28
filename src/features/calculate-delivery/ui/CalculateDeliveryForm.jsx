import { Button } from '@/shared/ui/Button'
import globe from '../assets/globe.png'
import city from '../assets/city.png'
import index from '../assets/index.png'
import weight from '../assets/weight.png'
import services from '../assets/services.png'
import { useCalculateDeliveryForm } from '../model/useCalculateDeliveryForm'
import { Field } from './Field'

const control = 'w-full bg-transparent text-sm outline-none'

export function CalculateDeliveryForm() {
    const f = useCalculateDeliveryForm()

    return (
        <form onSubmit={f.submit} noValidate className="rounded-2xl bg-white p-8.5 shadow-[0_10px_40px_rgba(31,36,40,0.08)]">
            <div className="grid grid-cols-5 gap-7.5">
                <Field label="Страна:" icon={globe} error={f.errors.country?.message}>
                    <select className={control} {...f.fields.country}>
                        {f.countries.map(({ value, label }) => (
                            <option key={value} value={value}>{label}</option>
                        ))}
                    </select>
                </Field>

                <Field label="Город:" icon={city} error={f.errors.city?.message}>
                    <input type="text" placeholder="Москва" className={control} {...f.fields.city} />
                </Field>

                <Field label="Индекс:" icon={index} error={f.errors.index?.message}>
                    <input type="text" inputMode="numeric" placeholder="Введите индекс" className={control} {...f.fields.index} />
                </Field>

                <Field label="Вес посылки:" icon={weight} error={f.errors.weight?.message}>
                    <input type="number" step="0.1" className={control} {...f.fields.weight} />
                </Field>

                <Field label="Дополнительные услуги:" icon={services}>
                    <select className={control} {...f.fields.service}>
                        {f.services.map(({ value, label }) => (
                            <option key={value} value={value}>{label}</option>
                        ))}
                    </select>
                </Field>
            </div>

            <div className="mt-8 flex items-center gap-10">
                <Button type="submit" size="lg" className="w-60" disabled={f.isSubmitting}>
                    {f.isSubmitting ? 'Считаем…' : 'Рассчитать'}
                </Button>

                {f.estimate !== null && (
                    <p className="text-lg">
                        Ориентировочная стоимость доставки: <b className="text-primary">£{f.estimate.toFixed(2)}</b>
                    </p>
                )}
            </div>
        </form>
    )
}
