import envelope from '../assets/envelope.png'
import { Button } from '@/shared/ui/Button'
import { useSubscribeForm } from '../model/useSubscribeForm'

export function SubscribeForm() {
    const { done, errors, isSubmitting, emailField, submit } = useSubscribeForm()

    if (done) {
        return <p className="flex-1 text-lg font-bold">Спасибо! Вы подписаны на рассылку.</p>
    }

    return (
        <form onSubmit={submit} noValidate className="flex flex-1 items-start gap-12">
            <div className="flex-1">
                <label className="flex items-center gap-4 border-b border-white pb-2.5">
                    <img src={envelope} alt="" className="size-6.5" />
                    <input
                        type="email"
                        placeholder="Введите ваш email"
                        className="flex-1 bg-transparent text-sm outline-none placeholder:text-white/80"
                        {...emailField}
                    />
                </label>

                {errors.email && (
                    <p className="mt-2 text-sm text-red-200" role="alert">
                        {errors.email.message}
                    </p>
                )}
            </div>

            <Button type="submit" size="lg" className="w-60" disabled={isSubmitting}>
                {isSubmitting ? 'Отправляем…' : 'Подписаться'}
            </Button>
        </form>
    )
}
