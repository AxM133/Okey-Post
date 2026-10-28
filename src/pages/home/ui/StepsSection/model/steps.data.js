import step1 from '@/pages/home/assets/steps/step1.png'
import step2 from '@/pages/home/assets/steps/step2.png'
import step3 from '@/pages/home/assets/steps/step3.png'
import step4 from '@/pages/home/assets/steps/step4.png'

export const STEPS_TITLE = '4 простых шага для ваших покупок в Великобритании'

export const STEPS = [
    {
        id: 1,
        image: step1,
        title: 'вы ВЫБИРАЕТЕ ТОВАР',
        parts: ['в английском магазине, оплачиваете и указываете ', { accent: 'адрес склада' }, ' OkeyPost'],
    },
    {
        id: 2,
        image: step2,
        title: 'ПОКУПКИ ПРИХОДЯТ НА СКЛАД',
        parts: ['и появляются в вашем личном кабинете на нашем сайте'],
    },
    {
        id: 3,
        image: step3,
        title: 'ОТПРАВЛЯЕМ ИХ К ВАМ ДОМОЙ',
        parts: ['в надежной упаковке, по выгодной цене и очень быстро'],
    },
    {
        id: 4,
        image: step4,
        title: 'ЗАБИРАЕТЕ СВОЮ ПОСЫЛКУ',
        parts: ['в пункте выдачи, на почте или с курьером'],
    },
]

export const STEPS_FOOTER = {
    text: 'Не хотите разбираться самостоятельно, наши мастера шопинга с радостью купят все товары за вас.',
    action: 'Быстрая покупка',
}
