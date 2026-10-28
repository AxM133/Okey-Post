import { PromoBanner } from '@/shared/ui/PromoBanner'
import { TOUR } from '../model/tour.data'

export function TourSection() {
    return (
        <section className="pt-40">
            <PromoBanner
                image={TOUR.image}
                title={TOUR.title}
                text={TOUR.text}
                action={TOUR.action}
                titleClassName="text-[40px] leading-14 font-extrabold"
            />
        </section>
    )
}
