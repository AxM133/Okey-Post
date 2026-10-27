import { Outlet } from 'react-router-dom'
import { CabinetHeader } from '@/widgets/cabinet-header'
import { Footer } from '@/widgets/footer'

export function CabinetLayout() {
    return (
        <>
            <CabinetHeader />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    )
}
