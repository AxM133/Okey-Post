import { Container } from '@/shared/ui/Container'
import { SectionTitle } from '@/shared/ui/SectionTitle'
import { DeliveryMethodCard, useDeliveryMethods } from '@/entities/delivery-method'
import { DELIVERY } from '../model/delivery.data'
import { CalculateDeliveryForm } from '@/features/calculate-delivery'

export function DeliverySection() {
    const { methods } = useDeliveryMethods()

    return (
        <section className="pt-40">
            <Container>
                <SectionTitle className="max-w-206">{DELIVERY.title}</SectionTitle>
                <p className="mt-5 max-w-190 text-xl leading-9 font-light">{DELIVERY.text}</p>

                <div className="mt-12.5">
                    <CalculateDeliveryForm />
                </div>

                <h3 className="mt-20 text-[40px] leading-[1.3] font-extrabold">{DELIVERY.methodsTitle}</h3>
                <div className="mt-7.5 flex flex-col gap-5">
                    {methods.map((method) => (
                        <DeliveryMethodCard key={method.id} method={method} />
                    ))}
                </div>
            </Container>
        </section>
    )
}
