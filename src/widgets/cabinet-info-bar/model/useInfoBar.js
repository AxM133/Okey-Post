import { INFO_BAR } from './infoBar.data'
import { useLondonTime } from './useLondonTime'

export function useInfoBar() {
    const time = useLondonTime()

    // Баланс и бонусы позже придут с сервера
    return { ...INFO_BAR, time, balance: '£ 0', bonus: '£ 0' }
}
