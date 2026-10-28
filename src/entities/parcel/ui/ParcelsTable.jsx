import doc from '@/shared/assets/doc.svg'
import { Button } from '@/shared/ui/Button'
import { DataTable } from '@/shared/ui/DataTable'

function WeightCell({ row }) {
    const { actual, volume, total } = row.weightDetails

    return (
        <span className="group relative inline-flex items-center gap-2">
            {row.weight}
            <span className="inline-flex size-4 items-center justify-center rounded-full bg-line text-[10px] font-bold text-white">i</span>

            <span className="invisible absolute top-8 left-0 z-10 w-64 rounded-xl bg-white p-6 text-sm shadow-[0_10px_40px_rgba(31,36,40,0.15)] group-hover:visible">
                <span className="block"><b>Фактический вес:</b> {actual}</span>
                <span className="mt-3 block"><b>Объемы посылки:</b> {volume}</span>
                <span className="mt-3 block"><b>Итоговый вес:</b> {total}</span>
            </span>
        </span>
    )
}

const COLUMNS = [
    { key: 'date', title: 'Дата', sortable: true },
    { key: 'track', title: 'Трек номер', sortable: true },
    { key: 'delivery', title: 'Доставка', sortable: true },
    { key: 'fullName', title: 'ФИО', sortable: true },
    { key: 'cargo', title: 'Параметры груза', sortable: true },
    { key: 'weight', title: 'Вес', sortable: true, render: (row) => <WeightCell row={row} /> },
    { key: 'sum', title: 'Сумма', sortable: true },
    { key: 'status', title: 'Статус', sortable: true, render: () => <span className="inline-block size-4.5 rounded-full bg-slate-400" /> },
    { key: 'services', title: 'Дополнительные услуги', render: () => <img src={doc} alt="" /> },
    { key: 'action', title: '', render: () => <Button variant="outline" className="w-30">Оплатить</Button> },
]

export function ParcelsTable({ parcels }) {
    return <DataTable columns={COLUMNS} rows={parcels} />
}
