import { Button } from '@/shared/ui/Button'
import { Container } from '@/shared/ui/Container'
import { SectionTitle } from '@/shared/ui/SectionTitle'
import { useSteps } from '../model/useSteps'
import { StepCard } from './StepCard'

export function StepsSection() {
    const { title, steps, footer, onAction } = useSteps()

    return (
        <section className="pt-42.5">
            <Container>
                <SectionTitle className="max-w-175">{title}</SectionTitle>

                <div className="mt-3 grid grid-cols-[358px_357px_358px_1fr]">
                    {steps.map((step) => (
                        <StepCard key={step.id} step={step} />
                    ))}
                </div>

                <p className="mt-12.5 max-w-190 text-xl leading-9 font-light">{footer.text}</p>
                <Button size="lg" className="mt-7.5 w-60" onClick={onAction}>
                    {footer.action}
                </Button>
            </Container>
        </section>
    )
}
