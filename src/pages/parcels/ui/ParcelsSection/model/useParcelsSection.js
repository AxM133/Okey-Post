import { useParcels } from '@/entities/parcel'
import { useCurrentUser } from '@/entities/user'

export function useParcelsSection() {
    const { user } = useCurrentUser()
    const { parcels } = useParcels()

    return {
        title: `Посылки пользователя ${user.name}`,
        action: 'Запрос на формирование посылки',
        parcels,
    }
}
