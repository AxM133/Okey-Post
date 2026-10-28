import { CUSTOMS_NOTICE, NOTIFICATIONS } from './notifications.data'

// Позже здесь будет запрос через axios (и непрочитанные в сторе).
export function useNotifications() {
    return { notifications: NOTIFICATIONS, customsNotice: CUSTOMS_NOTICE, unreadCount: 2 }
}
