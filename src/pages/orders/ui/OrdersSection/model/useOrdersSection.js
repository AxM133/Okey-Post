import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ROUTES } from '@/shared/config'
import { ORDER_TABS, useOrders } from '@/entities/order'
import { useCurrentUser } from '@/entities/user'

export function useOrdersSection() {
    const { user } = useCurrentUser()
    const navigate = useNavigate()
    const orders = useOrders()
    const [filterOpen, setFilterOpen] = useState(false)

    return {
        title: `Заказы пользователя ${user.name}`,
        tabs: ORDER_TABS,
        filterOpen,
        toggleFilter: () => setFilterOpen((open) => !open),
        addOrder: () => navigate(ROUTES.cabinet.orderCreate),
        addVirtualOrder: () => navigate(ROUTES.cabinet.virtualOrder),
        ...orders,
    }
}
