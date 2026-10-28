import { DefinitionTable } from '@/shared/ui/DefinitionTable'
import { REQUISITES } from '../model/profileTabs.data'

export function RequisitesTab() {
    return (
        <div className="flex flex-col gap-10">
            {REQUISITES.map(({ id, title, rows, logo }) => (
                <div key={id}>
                    <h2 className="text-[28px] font-bold">{title}</h2>

                    <div className="mt-5">
                        {rows ? (
                            <DefinitionTable rows={rows} labelWidth="w-96" />
                        ) : (
                            <span className="inline-flex h-12 items-center rounded-full bg-white px-5 shadow-[0_10px_40px_rgba(31,36,40,0.08)]">
                                <img src={logo} alt={title} />
                            </span>
                        )}
                    </div>
                </div>
            ))}
        </div>
    )
}
