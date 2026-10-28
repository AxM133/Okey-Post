import { Container } from '@/shared/ui/Container'
import { SectionTitle } from '@/shared/ui/SectionTitle'
import { BENEFITS } from '../model/benefits.data'
import { BenefitCard } from './BenefitCard'

export function BenefitsSection() {
    return (
        <section className="pt-25">
            <Container>
                <SectionTitle>{BENEFITS.title}</SectionTitle>

                <div className="mt-10 grid grid-cols-2 items-start gap-7.5">
                    {BENEFITS.items.map((item) => (
                        <BenefitCard key={item.id} item={item} />
                    ))}
                </div>
            </Container>
        </section>
    )
}
