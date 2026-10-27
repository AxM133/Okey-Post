import { Button } from "@/shared/ui/Button";
import { Input } from "@/shared/ui/Input";

export function HomePage() {
    return (
        <div className="flex flex-col gap-6 p-10 max-w-100">
            <Button>Связаться с нами</Button>
            <Button size="lg">Получить адрес в UK</Button>
            <Button variant="outline">Outline</Button>
            <Input label="Ваш email:" placeholder="name@email.ru" />
            <Input label="Ваш пароль:" type="password" error="Слишком короткий " />
        </div>
    )
}