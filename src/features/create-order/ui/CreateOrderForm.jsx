import { Button } from '@/shared/ui/Button'
import { Input } from '@/shared/ui/Input'
import { Textarea } from '@/shared/ui/Textarea'
import { useCreateOrderForm } from '../model/useCreateOrderForm'

export function CreateOrderForm() {
    const f = useCreateOrderForm()

    return (
        <form onSubmit={f.submit} noValidate className="max-w-90">
            {f.items.map((item, i) => {
                const fields = f.fieldsOf(i)
                const err = f.errors.items?.[i] ?? {}

                return (
                    <div key={item.id} className="mb-10 flex flex-col gap-5">
                        <div className="flex items-center justify-between">
                            <h2 className="text-base font-bold">Товар # {i + 1}</h2>
                            {f.items.length > 1 && (
                                <button type="button" onClick={() => f.remove(i)} className="cursor-pointer text-sm text-red-500">
                                    Удалить
                                </button>
                            )}
                        </div>

                        <Input label="Ссылка на страницу с товаром:" error={err.link?.message} {...fields.link} />
                        <Input label="Название товара:" error={err.name?.message} {...fields.name} />

                        <div className="grid grid-cols-2 gap-5">
                            <Input label="Количество:" type="number" error={err.quantity?.message} {...fields.quantity} />
                            <Input label="Размер:" {...fields.size} />
                            <Input label="Цвет:" {...fields.color} />
                            <Input label="Цена на сайте:" type="number" step="0.01" error={err.price?.message} {...fields.price} />
                        </div>

                        <Textarea label="Комментарий:" {...fields.comment} />
                    </div>
                )
            })}

            <div className="flex flex-wrap items-center gap-3">
                <Button type="submit" disabled={f.isSubmitting}>
                    {f.isSubmitting ? 'Отправляем…' : 'Отправить'}
                </Button>
                <Button type="button" variant="outline" onClick={f.duplicate}>Дублировать</Button>
                <Button type="button" variant="outline" onClick={f.add}>Добавить товар</Button>
                <Button type="button" variant="outline" onClick={f.saveDraft}>Сохранить</Button>
            </div>

            {f.draftSaved && <p className="mt-4 text-sm font-bold text-primary">Черновик сохранён</p>}
        </form>
    )
}
