import address from '@/pages/prices/assets/address.png'
import merge from '@/pages/prices/assets/merge.png'
import packing from '@/pages/prices/assets/packing.png'
import storage from '@/pages/prices/assets/storage.png'

export const SERVICES = [
    {
        id: 'address',
        image: address,
        title: 'Ваш личный адрес для покупок',
        text: 'на нашем современном автоматизированном складе в безналоговом Делавэре',
        price: 'Бесплатно',
    },
    {
        id: 'merge',
        image: merge,
        title: 'Объединение нескольких посылок в одну',
        text: 'ведь часто отправлять несколько посылок в одной коробке гораздо выгоднее, чем по одной',
        price: 'от £10.00',
    },
    {
        id: 'packing',
        image: packing,
        title: 'Усиленная упаковка по запросу',
        text: 'Мы дополнительно упакуем вашу посылку в пленку, коробку с двойными стенками.',
        price: 'от £0.25',
    },
    {
        id: 'storage',
        image: storage,
        title: 'Хранение входящих посылок 30 дней',
        text: 'чем больше срок хранения посылок на складе – тем больше вы сможете собрать',
        price: 'Бесплатно',
    },
]
