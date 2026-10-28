import link from '@/shared/assets/link.svg'
import { Button } from '@/shared/ui/Button'
import { useOrderByLinkForm } from '../model/useOrderByLinkForm'

export function OrderByLinkForm() {
    const { sent, errors, isSubmitting, urlField, submit, again } = useOrderByLinkForm()

    if (sent) {
        return (
            <div>
                <p className="text-lg font-bold">Ссылка отправлена. Оператор свяжется с вами!</p>
                <button type="button" onClick={again} className="mt-3 cursor-pointer text-sm underline">
                    Отправить ещё одну
                </button>
            </div>
        )
    }

    return (
        <form onSubmit={submit} noValidate>
            <label className="flex max-w-128 items-center gap-3 border-b border-white pb-2.5">
                <img src={link} alt="" />
                <input
                    type="url"
                    placeholder="Введите ссылку на товар"
                    className="flex-1 bg-transparent text-sm outline-none placeholder:text-white/80"
                    {...urlField}
                />
            </label>
            {errors.url && (
                <p className="mt-2 text-sm text-red-200" role="alert">
                    {errors.url.message}
                </p>
            )}

            <div className="mt-6 flex items-center gap-8">
                <Button type="submit" size="lg" className="w-60" disabled={isSubmitting}>
                    {isSubmitting ? 'Отправляем…' : 'Отправить'}
                </Button>
                <p className="max-w-85 text-xs font-light opacity-90">
                    Нажимая на кнопку вы подтверждаете согласие с правилами предоставления услуги и политикой
                    конфиденциальности
                </p>
            </div>
        </form>
    )
}
