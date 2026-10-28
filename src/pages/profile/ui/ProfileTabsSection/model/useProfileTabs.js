import { useState } from 'react'
import { PROFILE_TABS } from './profileTabs.data'

export function useProfileTabs() {
    const [tab, setTab] = useState(PROFILE_TABS[0].id)

    return { tabs: PROFILE_TABS, tab, setTab }
}
