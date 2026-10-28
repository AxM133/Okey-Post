import { PageBanner } from '@/widgets/page-banner'
import { SocialBanner } from '@/widgets/social-banner'
import { useSalesPage } from '../model/useSalesPage'
import { SalesListSection } from './SalesListSection'

export function SalesPage() {
    const { banner, onAction } = useSalesPage()

    return (
        <>
            <PageBanner {...banner} onAction={onAction} />
            <SalesListSection />
            <SocialBanner />
        </>
    )
}
