import { Button } from '@/shared/ui/Button'
import { Input } from '@/shared/ui/Input'

export function SmsCodeForm({ form }) {
    const { field, errors, isSubmitting, submit } = form

    return (
        <form onSubmit={submit} noValidate className="flex flex-col gap-7">
            <Input
                label="Код и СМС:"
                inputMode="numeric"
                autoComplete="one-time-code"
                error={errors.code?.message}
                {...field}
            />

            <Button type="submit" size="lg" className="w-50" disabled={isSubmitting}>
                {isSubmitting ? 'Проверяем…' : 'Войти'}
            </Button>
        </form>
    )
}
