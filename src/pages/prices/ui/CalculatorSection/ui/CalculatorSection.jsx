import { Container } from '@/shared/ui/Container'
import { SectionTitle } from '@/shared/ui/SectionTitle'
import { CalculateDeliveryForm } from '@/features/calculate-delivery'
import { DeliveryMethodCard, useDeliveryMethods } from '@/entities/delivery-method'
import { CALCULATOR } from '../model/calculator.data'

export function CalculatorSection() {
    const { methods } = useDeliveryMethods()

    return (
        <section className="pt-37.5">
            <Container>
                <SectionTitle className="max-w-130">{CALCULATOR.title}</SectionTitle>
                <p className="mt-3 max-w-100 text-base leading-9 font-light">{CALCULATOR.text}</p>

                <div className="mt-7.5">
                    <CalculateDeliveryForm />
                </div>

                <h2 className="mt-30 text-[40px] leading-[1.3] font-extrabold">{CALCULATOR.methodsTitle}</h2>
                <div className="mt-7.5 flex flex-col gap-5">
                    {methods.map((method) => (
                        <DeliveryMethodCard key={method.id} method={method} />
                    ))}
                </div>
            </Container>
        </section>
    )
}
