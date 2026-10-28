import clock from '../assets/clock.png'
import alarm from '../assets/alarm.png'
import bank from '../assets/bank.png'
import dollar from '../assets/dollar.png'
import paypal from '../assets/paypal.png'
import cards from '../assets/cards.png'

export const INFO_BAR = {
    icons: { clock, alarm, bank, dollar },
    hours: 'Пн.-Пт. 09:00-18:00 Сб. 09:00-14:00',
    payments: [
        { id: 'paypal', image: paypal, label: 'PayPal' },
        { id: 'cards', image: cards, label: 'Visa / MasterCard' },
    ],
    action: 'Добавить транзакцию',
}
