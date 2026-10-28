import { Outlet } from 'react-router-dom'
import { CabinetHeader } from '@/widgets/cabinet-header'
import { CabinetInfoBar } from '@/widgets/cabinet-info-bar'
import { CabinetFooter } from '@/widgets/cabinet-footer'

export function CabinetLayout() {
    return (
        <>
            <CabinetHeader />
            <CabinetInfoBar />
            <main>
                <Outlet />
            </main>
            <CabinetFooter />
        </>
    )
}
