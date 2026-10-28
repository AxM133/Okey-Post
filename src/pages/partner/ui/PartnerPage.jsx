import { PageBanner } from '@/widgets/page-banner'
import { usePartnerPage } from '../model/usePartnerPage'
import { BenefitsSection } from './BenefitsSection'
import { JoinSection } from './JoinSection'

export function PartnerPage() {
    const { banner, onAction } = usePartnerPage()

    return (
        <>
            <PageBanner {...banner} onAction={onAction} />
            <BenefitsSection />
            <JoinSection onAction={onAction} />
        </>
    )
}
