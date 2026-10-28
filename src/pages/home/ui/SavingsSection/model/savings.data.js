import clothes from '@/pages/home/assets/categories/clothes.svg'
import electronics from '@/pages/home/assets/categories/electronics.svg'
import accessories from '@/pages/home/assets/categories/accessories.svg'
import kids from '@/pages/home/assets/categories/kids.svg'
import sport from '@/pages/home/assets/categories/sport.svg'
import cosmetics from '@/pages/home/assets/categories/cosmetics.svg'

import jacket from '@/pages/home/assets/products/jacket.png'
import tshirt from '@/pages/home/assets/products/tshirt.png'
import jeans from '@/pages/home/assets/products/jeans.png'

export const CATEGORIES = [
    { id: 'clothes', label: 'Одежда', icon: clothes },
    { id: 'electronics', label: 'Электроника', icon: electronics },
    { id: 'accessories', label: 'Аксессуары', icon: accessories },
    { id: 'kids', label: 'Для детей', icon: kids },
    { id: 'sport', label: 'Для спорта', icon: sport },
    { id: 'cosmetics', label: 'Косметика', icon: cosmetics },
]

export const PRODUCTS = [
    {
        id: 1,
        category: 'clothes',
        name: 'Columbia Barlow Pass 550 Turbodown Jacket',
        image: jacket,
        priceRu: '7891,46₽',
        priceUk: '£80.62',
        deliveryFrom: '£7.79',
        days: 10,
        savings: '$119.56',
    },
    {
        id: 2,
        category: 'clothes',
        name: 'Футболка Daisy Oversize Black',
        image: tshirt,
        priceRu: '2490,00₽',
        priceUk: '£14.99',
        deliveryFrom: '£7.79',
        days: 10,
        savings: '$18.40',
    },
    {
        id: 3,
        category: 'clothes',
        name: "Levi's 501 Original Fit Jeans",
        image: jeans,
        priceRu: '6990,00₽',
        priceUk: '£49.00',
        deliveryFrom: '£7.79',
        days: 10,
        savings: '$61.25',
    },
]
