import { ORDER_TABS, useOrders } from '@/entities/order'
import { useCurrentUser } from '@/entities/user'

export function useOrdersSection() {
    const { user } = useCurrentUser()
    const orders = useOrders()

    return {
        title: `Заказы пользователя ${user.name}`,
        action: 'Добавить новый заказ',
        tabs: ORDER_TABS,
        ...orders,
    }
}
