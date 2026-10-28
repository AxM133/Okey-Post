import { Container } from '@/shared/ui/Container'
import { Tabs } from '@/shared/ui/Tabs'
import { useProfileTabs } from '../model/useProfileTabs'
import { RequisitesTab } from './RequisitesTab'
import { VirtualAddressTab } from './VirtualAddressTab'
import { WorkInfoTab } from './WorkInfoTab'

const CONTENT = {
    address: VirtualAddressTab,
    info: WorkInfoTab,
    requisites: RequisitesTab,
}

export function ProfileTabsSection() {
    const { tabs, tab, setTab } = useProfileTabs()
    const Content = CONTENT[tab]

    return (
        <section className="pt-22">
            <Container wide>
                <Tabs tabs={tabs} activeId={tab} onChange={setTab} className="w-fit" />

                <div className="mt-12">
                    <Content />
                </div>
            </Container>
        </section>
    )
}
