import { Button } from '@/shared/ui/Button'
import { DataTable } from '@/shared/ui/DataTable'

const COLUMNS = [
    { key: 'date', title: 'Дата:', sortable: true },
    { key: 'type', title: 'Тип оплаты:', sortable: true },
    { key: 'description', title: 'Описание транзакции:', sortable: true },
    { key: 'credit', title: 'Зачисление:', sortable: true },
    { key: 'cashback', title: 'Кешбэк:', sortable: true },
    { key: 'status', title: 'Статус:', sortable: true, render: () => <span className="inline-block size-4.5 rounded-full bg-slate-400" /> },
    { key: 'balance', title: 'Остаток:', sortable: true },
    { key: 'invoice', title: 'Счет:', render: () => '⤓' },
    { key: 'action', title: '', render: () => <Button variant="outline" className="w-30">Оплатить</Button> },
]

export function TransactionsTable({ transactions }) {
    return <DataTable columns={COLUMNS} rows={transactions} />
}
