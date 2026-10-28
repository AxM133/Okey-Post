import { PageBanner } from '@/widgets/page-banner'
import { SocialBanner } from '@/widgets/social-banner'
import { BANNER } from '../model/banner.data'
import { FaqListSection } from './FaqListSection'

export function FaqPage() {
    return (
        <>
            <PageBanner {...BANNER} />
            <FaqListSection />
            <SocialBanner />
        </>
    )
}
