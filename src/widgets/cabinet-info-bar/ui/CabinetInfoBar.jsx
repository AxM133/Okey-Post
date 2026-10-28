import { Button } from '@/shared/ui/Button'
import { Container } from '@/shared/ui/Container'
import { useInfoBar } from '../model/useInfoBar'

function Item({ icon, children }) {
    return (
        <div className="flex items-center gap-3 text-sm font-medium">
            <img src={icon} alt="" className="size-8" />
            {children}
        </div>
    )
}

export function CabinetInfoBar() {
    const { icons, time, hours, bonus, balance, payments, action } = useInfoBar()

    return (
        <div className="h-27.5 rounded-[50px] bg-linear-to-tr from-brand-from to-brand-to text-white">
            <Container wide className="flex h-full items-center gap-10">
                <Item icon={icons.clock}>Лондон: {time}</Item>
                <Item icon={icons.alarm}>{hours}</Item>
                <Item icon={icons.bank}>Курс валют</Item>
                <Item icon={icons.dollar}>Бонусный счет: {bonus}</Item>

                <div className="ml-auto flex items-center gap-5">
                    <span className="text-sm font-medium">Ваш баланс: {balance}</span>
                    <Button className="w-50">{action}</Button>
                    {payments.map(({ id, image, label }) => (
                        <span key={id} className="flex h-12 items-center rounded-full bg-white px-5">
                            <img src={image} alt={label} />
                        </span>
                    ))}
                </div>
            </Container>
        </div>
    )
}
