import { HeroSection } from './HeroSection'
import { SavingsSection } from './SavingsSection'
import { AdvantagesSection } from './AdvantagesSection'
import { ShoppingSection } from './ShoppingSection'
import { DeliverySection } from './DeliverySection'
import { StepsSection } from './StepsSection'
import { TourSection } from './TourSection'
import { StatsSection } from './StatsSection'
import { ReviewsSection } from './ReviewsSection'
import { AddressSection } from './AddressSection'
import { SubscribeSection } from './SubscribeSection'

export function HomePage() {
    return (
        <>
            <HeroSection />
            <SavingsSection />
            <AdvantagesSection />
            <ShoppingSection />
            <DeliverySection />
            <StepsSection />
            <TourSection />
            <StatsSection />
            <ReviewsSection />
            <AddressSection />
            <SubscribeSection />
        </>
    )
}
