import { DefinitionTable } from '@/shared/ui/DefinitionTable'
import { VIRTUAL_ADDRESS } from '../model/profileTabs.data'

export function VirtualAddressTab() {
    return (
        <div>
            <h2 className="text-[28px] font-bold">{VIRTUAL_ADDRESS.title}</h2>
            <div className="mt-5">
                <DefinitionTable rows={VIRTUAL_ADDRESS.rows} />
            </div>
        </div>
    )
}
