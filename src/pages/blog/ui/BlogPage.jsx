import { PageBanner } from '@/widgets/page-banner'
import { SocialBanner } from '@/widgets/social-banner'
import { BANNER } from '../model/banner.data'
import { BlogListSection } from './BlogListSection'

export function BlogPage() {
    return (
        <>
            <PageBanner {...BANNER} />
            <BlogListSection />
            <SocialBanner />
        </>
    )
}
