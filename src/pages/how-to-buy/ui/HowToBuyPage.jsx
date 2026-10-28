import { PageBanner } from '@/widgets/page-banner'
import { SocialBanner } from '@/widgets/social-banner'
import { useHowToBuyPage } from '../model/useHowToBuyPage'
import { GuideSection } from './GuideSection'

export function HowToBuyPage() {
    const { banner, onAction } = useHowToBuyPage()

    return (
        <>
            <PageBanner {...banner} onAction={onAction} />
            <GuideSection onAction={onAction} />
            <SocialBanner />
        </>
    )
}
