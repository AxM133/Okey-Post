import { PageBanner } from '@/widgets/page-banner'
import { SocialBanner } from '@/widgets/social-banner'
import { BANNER } from '../model/banner.data'
import { ShopsListSection } from './ShopsListSection'

export function ShopsPage() {
    return (
        <>
            <PageBanner {...BANNER} />
            <ShopsListSection />
            <SocialBanner />
        </>
    )
}
