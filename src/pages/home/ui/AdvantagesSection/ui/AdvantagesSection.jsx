import { Container } from '@/shared/ui/Container'
import { ADVANTAGES } from '../model/advantages.data'
import { AdvantageItem } from './AdvantageItem'

export function AdvantagesSection() {
    return (
        <section className="pt-40">
            <Container>
                <div className="flex h-45 items-center rounded-2xl bg-white shadow-[0_10px_40px_rgba(31,36,40,0.08)]">
                    {ADVANTAGES.map(({ id, icon, title }, i) => (
                        <AdvantageItem key={id} icon={icon} title={title} withDivider={i > 0} />
                    ))}
                </div>
            </Container>
        </section>
    )
}
