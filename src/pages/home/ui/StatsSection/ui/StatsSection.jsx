import { Container } from '@/shared/ui/Container'
import { SectionTitle } from '@/shared/ui/SectionTitle'
import { STATS } from '../model/stats.data'
import { StatCard } from './StatCard'

export function StatsSection() {
    return (
        <section className="pt-40">
            <Container>
                <SectionTitle className="max-w-210">{STATS.title}</SectionTitle>
                <p className="mt-5 max-w-160 text-xl leading-9 font-light">{STATS.text}</p>

                <div className="mt-10 grid grid-cols-3 gap-7.5">
                    {STATS.cards.map((card) => (
                        <StatCard key={card.id} card={card} />
                    ))}
                </div>
            </Container>
        </section>
    )
}
