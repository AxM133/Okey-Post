import paypal from '@/pages/profile/assets/paypal.png'
import cards from '@/pages/profile/assets/cards.png'

export const PROFILE_TABS = [
    { id: 'address', label: 'Виртуальный адрес' },
    { id: 'info', label: 'Информация о работе' },
    { id: 'requisites', label: 'Реквизиты для оплаты' },
]

export const VIRTUAL_ADDRESS = {
    title: 'Ваш виртуальный адрес:',
    rows: [
        { label: 'Ваш ID Клиента:', value: 'OK65564654654' },
        { label: 'Name, Surname:', value: 'Karimov Dmitro OK65564654654' },
        { label: 'First line of address:', value: 'Unit 5 Cromwell Estate OK65564654654' },
        { label: 'Second line of address:', value: 'Staffa road UK16988' },
        { label: 'County:', value: 'London' },
        { label: 'Postcode:', value: 'E10 7QZ' },
        { label: 'Town, City:', value: 'London' },
        { label: 'Country:', value: 'Great Britain' },
        { label: 'Telephone:', value: '07308187545' },
    ],
}

const CARD_ROWS = [
    { label: 'Номер карточки:', value: '4462617345592244' },
    { label: 'ФИО:', value: 'Jelena Boikova' },
]

export const REQUISITES = [
    { id: 'privat', title: 'Privat 24', rows: CARD_ROWS },
    { id: 'tinkoff', title: 'Тинькофф', rows: CARD_ROWS },
    { id: 'paypal', title: 'Paypal', logo: paypal },
    { id: 'payzone', title: 'Card-PayZone', logo: cards },
    {
        id: 'unistream',
        title: 'Unistream',
        rows: [
            { label: 'Name:', value: 'Mykhaylo Prykhodko' },
            { label: 'Tel:', value: '00447782164776' },
            { label: 'Branch:', value: 'London-Unistream' },
            { label: 'Adress:', value: 'Canary Wharf Beatty House, Admirals Way 5 E14 9UF' },
        ],
    },
    {
        id: 'swift',
        title: 'SWIFT',
        rows: [
            { label: 'ФИО:', value: 'Mykhaylo Prykhodko' },
            { label: 'Адрес проживания:', value: 'Unit 1 Cromwell industrial Estate, Staffa Road, E10 7QZ, London' },
            { label: 'Branch:', value: 'London-Unistream' },
            { label: 'Адрес и название отделения банка:', value: 'Westfiled Stratford City, E20' },
            { label: 'Branch:', value: '40-43-65' },
            { label: 'Номер счета (Account number):', value: '60019836' },
            { label: 'IBAN:', value: 'GB46HBUK40436560019836' },
            { label: 'SWIFTBIC:', value: 'HBUKGB4194C' },
            { label: 'Телефон получателя:', value: '00447782164776' },
        ],
    },
]
