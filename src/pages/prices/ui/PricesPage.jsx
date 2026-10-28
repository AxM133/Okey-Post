import { PageBanner } from '@/widgets/page-banner'
import { SocialBanner } from '@/widgets/social-banner'
import { BANNER } from '../model/banner.data'
import { ServicesSection } from './ServicesSection'
import { CalculatorSection } from './CalculatorSection'
import { WarehouseSection } from './WarehouseSection'
import { OperatorBannerSection } from './OperatorBannerSection'
import { InsuranceSection } from './InsuranceSection'

export function PricesPage() {
    return (
        <>
            <PageBanner {...BANNER} />
            <ServicesSection />
            <CalculatorSection />
            <WarehouseSection />
            <OperatorBannerSection />
            <InsuranceSection />
            <SocialBanner />
        </>
    )
}
