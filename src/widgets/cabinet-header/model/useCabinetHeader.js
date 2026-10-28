import { useCurrentUser } from '@/entities/user'
import { useNotifications } from '@/entities/notification'
import { CABINET_NAV } from './nav.data'

export function useCabinetHeader() {
    const { user } = useCurrentUser()
    const { unreadCount } = useNotifications()

    return { user, unreadCount, nav: CABINET_NAV }
}
