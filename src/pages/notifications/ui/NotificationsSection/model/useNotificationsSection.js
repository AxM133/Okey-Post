import warning from '@/pages/notifications/assets/warning.png'
import { useNotifications } from '@/entities/notification'

export function useNotificationsSection() {
    const { notifications, customsNotice } = useNotifications()

    return { title: 'Уведомления', notifications, customsNotice, warning }
}
