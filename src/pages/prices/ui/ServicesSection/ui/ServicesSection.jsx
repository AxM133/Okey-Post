import { Container } from '@/shared/ui/Container'
import { SERVICES } from '../model/services.data'
import { ServiceCard } from './ServiceCard'

export function ServicesSection() {
    return (
        <section className="pt-22">
            <Container>
                <div className="grid grid-cols-[358px_357px_358px_1fr]">
                    {SERVICES.map((service) => (
                        <ServiceCard key={service.id} service={service} />
                    ))}
                </div>
            </Container>
        </section>
    )
}
