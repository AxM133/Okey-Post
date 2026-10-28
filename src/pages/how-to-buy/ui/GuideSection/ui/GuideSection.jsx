import { Button } from '@/shared/ui/Button'
import { Container } from '@/shared/ui/Container'
import { SectionTitle } from '@/shared/ui/SectionTitle'
import { GUIDE } from '../model/guide.data'
import { GuideStep } from './GuideStep'

export function GuideSection({ onAction }) {
    return (
        <section className="pt-30">
            <Container>
                <SectionTitle>{GUIDE.title}</SectionTitle>
                <p className="mt-5 max-w-230 text-lg leading-9 font-light">{GUIDE.text}</p>

                <div className="mt-12.5 flex flex-col gap-20">
                    {GUIDE.steps.map((step, i) => (
                        <GuideStep key={step.id} index={i} step={step} />
                    ))}
                </div>

                <Button size="lg" className="mt-12.5" onClick={onAction}>
                    {GUIDE.action}
                </Button>
            </Container>
        </section>
    )
}
