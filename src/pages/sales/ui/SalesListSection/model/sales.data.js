import shop1 from '@/pages/sales/assets/shop1.png'
import shop2 from '@/pages/sales/assets/shop2.png'
import shop3 from '@/pages/sales/assets/shop3.png'
import shop4 from '@/pages/sales/assets/shop4.png'
import shop5 from '@/pages/sales/assets/shop5.png'
import shop6 from '@/pages/sales/assets/shop6.png'
import shop7 from '@/pages/sales/assets/shop7.png'
import shop8 from '@/pages/sales/assets/shop8.png'
import shop9 from '@/pages/sales/assets/shop9.png'
import shop10 from '@/pages/sales/assets/shop10.png'

const PRICE = { bold: '£7.99 (3365₽)' }
const OPERATOR = 'Только выкуп с оператором →'
const SHOP = 'В магазин →'

// blocks: абзацы, внутри каждого строки; строка = массив частей для RichText
export const SALES_TITLE = 'Black Friday Early Access ранний доступ к распродажам в магазинах UK!'

export const SALES = [
    {
        id: 1, name: 'Abercrombie & Fitch', photo: shop1, action: OPERATOR,
        blocks: [
            [['цены от ', PRICE, ' разделе:'], ['мужские вещи: ', { accent: 'CLEARANCE' }], ['женские вещи: ', { accent: 'CLEARANCE' }]],
            [['качественные детские вещи на ', { accent: 'Abercrombie kids' }]],
        ],
    },
    {
        id: 2, name: 'Timberland', photo: shop2, action: OPERATOR,
        blocks: [
            [[{ bold: 'NEW!' }], [{ accent: 'Коллаб Tommy Hilfiger x Timberland!' }]],
            [['Ботинки от ', PRICE], ['Зимние шапки за ', PRICE]],
        ],
    },
    {
        id: 3, name: 'Polo Ralph Lauren', photo: shop3, action: OPERATOR,
        blocks: [
            [[{ accent: 'Рубашка' }, ' за ', PRICE], [{ accent: 'Худи' }, ' за ', PRICE], [{ accent: 'Свитшот с лого' }, ' за ', PRICE]],
            [['До - ', { bold: '40%' }, ' в разделе SALE']],
        ],
    },
    {
        id: 4, name: 'Hollister Co.', photo: shop4, action: OPERATOR,
        blocks: [
            [['цены от ', PRICE, ' разделе:'], ['мужские вещи: ', { accent: 'CLEARANCE' }], ['женские вещи: ', { accent: 'CLEARANCE' }]],
        ],
    },
    {
        id: 5, name: 'Michael Kors', photo: shop5, action: SHOP,
        blocks: [
            [[{ bold: 'Новая коллекция!' }], [{ bold: 'Michael Kors x 007 (James Bond)' }]],
            [['HOLIDAY HEAD START'], ['- ', { bold: '60%' }, ' на сумки, обувь и одежду']],
        ],
    },
    {
        id: 6, name: 'Аутлет Saks OFF 5TH', photo: shop6, action: OPERATOR,
        blocks: [
            [[{ bold: 'Black Friday Early Access' }], ['Брендовые шапки, шарфы и перчатки - ', { bold: '60% OFF' }]],
            [['Shop Pajar, Sorel, UGG, Calvin Klein Jeans, Tommy Hilfiger']],
        ],
    },
    {
        id: 7, name: "Victoria's Secret", photo: shop7, action: SHOP,
        blocks: [
            [[{ accent: 'Лосьоны и мисты' }, ' за ', PRICE], [{ accent: '7 трусиков' }, ' за ', PRICE], ['Халаты за ', PRICE]],
            [[{ bold: 'Потрать ' }, PRICE, ' - получи купон на ', { bold: '$25' }, ' на следующий заказ']],
        ],
    },
    {
        id: 8, name: 'levi.com', photo: shop8, action: SHOP,
        blocks: [
            [[{ accent: 'Джинсы' }, ' от ', PRICE]],
            [[{ bold: 'Скидка 30% на заказы от $100 с кодом TREAT30' }]],
        ],
    },
    {
        id: 9, name: 'UGG® - вход с VPN', photo: shop9, action: OPERATOR,
        blocks: [
            [['Угги за ', PRICE], ['Ботинки UGG от ', PRICE], ['в разделе ', { accent: 'SALE' }]],
            [[{ accent: 'Мужские угги' }, ' за ', PRICE], [{ accent: 'Слипперы' }, ' за ', PRICE]],
        ],
    },
    {
        id: 10, name: 'New Balance', photo: shop10, action: OPERATOR,
        blocks: [
            [[{ bold: 'Вход с VPN' }], ['- ', { bold: '30%' }, ' на некоторые модели'], [{ bold: 'Бесплатная' }, ' доставка $50+']],
        ],
    },
]
