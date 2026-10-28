import chevron from '@/shared/assets/chevron-dark.svg'

// columns: [{ key, title, sortable?, render?(row) }], rows: массив объектов
export function DataTable({ columns, rows, rowKey = 'id' }) {
    return (
        <div className="overflow-x-auto">
            <table className="w-full border-collapse text-left text-sm">
                <thead>
                    <tr className="bg-soft">
                        {columns.map((col) => (
                            <th key={col.key} className="h-15 px-6 font-bold whitespace-nowrap first:rounded-l-lg last:rounded-r-lg">
                                <span className="inline-flex items-center gap-2">
                                    {col.title}
                                    {col.sortable && <img src={chevron} alt="" />}
                                </span>
                            </th>
                        ))}
                    </tr>
                </thead>

                <tbody>
                    {rows.map((row) => (
                        <tr key={row[rowKey]} className="border-b border-line/40">
                            {columns.map((col) => (
                                <td key={col.key} className="h-15 px-6 font-light whitespace-nowrap">
                                    {col.render ? col.render(row) : row[col.key]}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
