import { Container } from '@/shared/ui/Container'
import { SectionTitle } from '@/shared/ui/SectionTitle'
import { ADDRESS } from '../model/address.data'

export function AddressSection() {
    return (
        <section className="pt-37.5">
            <Container>
                <SectionTitle>{ADDRESS.title}</SectionTitle>

                <div className="mt-3 flex flex-col gap-4">
                    {ADDRESS.paragraphs.map((text, i) => (
                        <p key={i} className="text-lg leading-9 font-light">
                            {text}
                        </p>
                    ))}
                </div>
            </Container>
        </section>
    )
}
